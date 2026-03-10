"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        // Observer for intersection
        const observerOptions = { threshold: 0.05 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Counter animation
        const animateCounter = (el: HTMLElement) => {
            if (el.dataset.animated === "true") return;
            el.dataset.animated = "true";

            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';
            const duration = 2000;
            const start = performance.now();

            function update(now: number) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);

                const current = Math.round(eased * target);
                el.textContent = prefix + current + suffix;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    el.textContent = prefix + target + suffix;
                }
            }
            requestAnimationFrame(update);
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target as HTMLElement);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });

        // Function to observe elements
        const observeElements = () => {
            document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
                if (!el.classList.contains('visible')) {
                    observer.observe(el);
                }
            });
            document.querySelectorAll('.counter').forEach(el => {
                if (el instanceof HTMLElement && el.dataset.animated !== "true") {
                    counterObserver.observe(el);
                }
            });
        };

        // Initial observation
        observeElements();

        // MutationObserver to catch dynamic content changes
        let mutationTimeout: any;
        const mutationObserver = new MutationObserver((mutations) => {
            const hasSignificantChange = mutations.some(m =>
                m.addedNodes.length > 0 ||
                (m.type === 'attributes' && m.attributeName === 'class' && !(m.target as HTMLElement).classList.contains('visible'))
            );

            if (hasSignificantChange) {
                clearTimeout(mutationTimeout);
                mutationTimeout = setTimeout(observeElements, 100);
            }
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class']
        });

        // Fail-safe: re-observe several times as page loads
        const timeouts = [100, 300, 800, 1500, 3000].map(ms => setTimeout(observeElements, ms));

        return () => {
            observer.disconnect();
            counterObserver.disconnect();
            mutationObserver.disconnect();
            clearTimeout(mutationTimeout);
            timeouts.forEach(clearTimeout);
        };
    }, [pathname]);

    return null;
}

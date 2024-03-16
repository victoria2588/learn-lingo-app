document.querySelectorAll(".tutor-read").forEach(o=>{o.addEventListener("click",s=>{const t=s.target;if(!t.classList.contains("read-more-btn"))return;const e=t.closest(".tutor-card");e.dataset.index;const r=e.querySelector(".tutor-readmore");r&&(t.classList.add("is-hidden"),r.classList.add("tutor-readmore--show"))})});
//# sourceMappingURL=read_more-cba04a21.js.map

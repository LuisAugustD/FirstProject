let activeIndex = 0;

const groups = document.getElementByClassName("card-group");

const handleLoveClick = () => {
    // Bump active index

    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    // Active group becomes after

    currentGroup.dataset.status = "after";

    // Next group becomes active

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
    });

    activeIndex = nextIndex;
}
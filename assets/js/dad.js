document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
    dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    });
    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });
    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });
    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone--over");
        });
    });
    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove("drop-zone--over");
    });
});

function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.id = "questionImg";
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }
    thumbnailElement.dataset.label = file.name;
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}

document.querySelectorAll(".drop-zone-1__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone-1");
    dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    });
    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail1(dropZoneElement, inputElement.files[0]);
        }
    });
    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone-1--over");
    });
    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone-1--over");
        });
    });
    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail1(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove("drop-zone-2--over");
    });
});

function updateThumbnail1(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone-1__thumb");
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone-1__prompt")) {
        dropZoneElement.querySelector(".drop-zone-1__prompt").remove();
    }
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.id = "answerImg1";
        thumbnailElement.classList.add("drop-zone-1__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }
    thumbnailElement.dataset.label = file.name;
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}

document.querySelectorAll(".drop-zone-2__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone-2");
    dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    });
    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail2(dropZoneElement, inputElement.files[0]);
        }
    });
    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone-2--over");
    });
    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone-2--over");
        });
    });
    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail2(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove("drop-zone-2--over");
    });
});

function updateThumbnail2(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone-2__thumb");
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone-2__prompt")) {
        dropZoneElement.querySelector(".drop-zone-2__prompt").remove();
    }
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.id = "answerImg2";
        thumbnailElement.classList.add("drop-zone-2__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }
    thumbnailElement.dataset.label = file.name;
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}

document.querySelectorAll(".drop-zone-3__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone-3");
    dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    });
    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail3(dropZoneElement, inputElement.files[0]);
        }
    });
    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone-3--over");
    });
    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone-3--over");
        });
    });
    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail3(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove("drop-zone-3--over");
    });
});

function updateThumbnail3(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone-3__thumb");
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone-3__prompt")) {
        dropZoneElement.querySelector(".drop-zone-3__prompt").remove();
    }
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.id = "answerImg3";
        thumbnailElement.classList.add("drop-zone-3__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }
    thumbnailElement.dataset.label = file.name;
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}

document.querySelectorAll(".drop-zone-4__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone-4");
    dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    });
    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail4(dropZoneElement, inputElement.files[0]);
        }
    });
    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone-4--over");
    });
    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone-4--over");
        });
    });
    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail4(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove("drop-zone-4--over");
    });
});

function updateThumbnail4(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone-4__thumb");
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone-4__prompt")) {
        dropZoneElement.querySelector(".drop-zone-4__prompt").remove();
    }
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.id = "answerImg4";
        thumbnailElement.classList.add("drop-zone-4__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }
    thumbnailElement.dataset.label = file.name;
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}

document.querySelectorAll(".drop-zone-5__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone-5");
    dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    });
    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail5(dropZoneElement, inputElement.files[0]);
        }
    });
    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone-5--over");
    });
    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone-5--over");
        });
    });
    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail5(dropZoneElement, e.dataTransfer.files[0]);
        }
        dropZoneElement.classList.remove("drop-zone-5--over");
    });
});

function updateThumbnail5(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone-5__thumb");
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone-5__prompt")) {
        dropZoneElement.querySelector(".drop-zone-5__prompt").remove();
    }
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.id = "answerImg5";
        thumbnailElement.classList.add("drop-zone-5__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }
    thumbnailElement.dataset.label = file.name;
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}
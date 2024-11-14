const slidington = {
    create: function(config) {
        const {
            title,
            description,
            image,
            link,
            action,
            buttonColor,
            arrowColor,
            model = 'default'
        } = config;

        const button = document.createElement("div");
        button.classList.add("slidington-button");
        button.setAttribute('data-model', model);

        const imageSide = document.createElement("div");
        imageSide.classList.add("slidington-button__image-side");

        // Handle background (image or color)
        if (image.startsWith('#')) {
            // It's a color
            imageSide.classList.add('color-bg');
            imageSide.style.setProperty('--bg-color', image);
        } else {
            // It's an image
            const imgElement = document.createElement("img");
            imgElement.classList.add("slidington-button__bg");
            imgElement.setAttribute("src", image || "default.jpg");
            imgElement.setAttribute("alt", "Button background");
            imageSide.appendChild(imgElement);
        }

        const colorSide = document.createElement("div");
        colorSide.classList.add("slidington-button__color-side");
        colorSide.style.backgroundColor = buttonColor || "var(--primary-color)";

        const content = document.createElement("div");
        content.classList.add("slidington-button__content");

        if (title) {
            const titleElement = document.createElement("h2");
            titleElement.classList.add("slidington-button__title");
            titleElement.textContent = title;
            content.appendChild(titleElement);
        }

        if (description) {
            const descElement = document.createElement("p");
            descElement.classList.add("slidington-button__description");
            descElement.textContent = description;
            content.appendChild(descElement);
        }

        const arrow = document.createElement("div");
        arrow.classList.add("slidington-button__arrow");
        const arrowSpan = document.createElement("span");
        arrowSpan.textContent = ">";
        arrow.appendChild(arrowSpan);
        arrow.style.color = arrowColor || "#fff";

        button.appendChild(imageSide);
        button.appendChild(colorSide);
        button.appendChild(content);
        button.appendChild(arrow);

        button.addEventListener("click", function() {
            if (action) {
                try {
                    // Check if action is a named function in the window object
                    if (typeof window[action] === 'function') {
                        window[action]();
                    } 
                    // If action is a stringified function, evaluate it
                    else if (typeof action === 'string') {
                        const func = eval(`(${action})`);
                        if (typeof func === 'function') {
                            func();
                        } else {
                            console.log("Provided action is not a function.");
                        }
                    } 
                } catch (error) {
                    console.error("Error executing action:", error);
                }
            } else if (link) {
                window.open(link, "_blank");
            } else {
                console.log("No action or link provided.");
            }
        });
        

        const currentScript = document.currentScript;
        currentScript.parentNode.insertBefore(button, currentScript);
    }
};
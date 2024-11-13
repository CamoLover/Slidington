const slidington = {
    create: function (t) {
      const { title, description, image, link, action, buttonColor, arrowColor } = t;
  
      // Main button container
      const button = document.createElement("div");
      button.classList.add("slidington-button");
  
      // Image side
      const imageSide = document.createElement("div");
      imageSide.classList.add("slidington-button__image-side");
  
      const img = document.createElement("img");
      img.classList.add("slidington-button__bg");
      img.setAttribute("src", image || "default.jpg"); // Fallback to default image
      img.setAttribute("alt", "Button background");
      imageSide.appendChild(img);
  
      // Color side
      const colorSide = document.createElement("div");
      colorSide.classList.add("slidington-button__color-side");
      colorSide.style.backgroundColor = buttonColor || "var(--primary-color)";
  
      // Content side
      const content = document.createElement("div");
      content.classList.add("slidington-button__content");
  
      if (title) {
        const titleEl = document.createElement("h2");
        titleEl.classList.add("slidington-button__title");
        titleEl.textContent = title;
        content.appendChild(titleEl);
      }
  
      if (description) {
        const descEl = document.createElement("p");
        descEl.classList.add("slidington-button__description");
        descEl.textContent = description;
        content.appendChild(descEl);
      }
  
      // Arrow
      const arrow = document.createElement("div");
      arrow.classList.add("slidington-button__arrow");
      const arrowSpan = document.createElement("span");
      arrowSpan.textContent = ">";
      arrow.appendChild(arrowSpan);
      arrow.style.color = arrowColor || "#fff";
  
      // Append parts
      button.appendChild(imageSide);
      button.appendChild(colorSide);
      button.appendChild(content);
      button.appendChild(arrow);
  
      // Button action
      button.addEventListener("click", function () {
        if (action && typeof window[action] === "function") {
          window[action]();
        } else if (link) {
          window.open(link, "_blank");
        } else {
          console.log("No action or link provided.");
        }
      });
  
      // Insert before current script
      const currentScript = document.currentScript;
      currentScript.parentNode.insertBefore(button, currentScript);
    },
  };
  
# 💧 Water Tank Trapping Visualizer

A responsive, high-performance web application built using **Vanilla JavaScript, HTML5, and CSS3** to solve and visualize the classic **Trapping Rain Water problem**. This solution calculates the exact units of water stored between structural blocks of varying heights and renders a vector-based layout representation dynamically using inline **SVG shapes**.

---

## 🚀 Key Features

* **Dynamic Array Parsing:** Accepts a sequence of comma-separated integers representing customized structural block distributions.
* **SVG Matrix Rendering:** Maps and scales vector boxes proportionally to reflect the physical architecture of the blocks and valleys.
* **Color-Coded Visuals:** Features distinct layout styles tracking active building blocks (`#eab308` yellow) and trapped water fields (`#0ea5e9` blue).
* **Responsive Architecture:** Leverages precise SVG view-box viewport parameters to ensure clean interface scaling across various screen dimensions.

---

## 🛠️ Tech Stack & Concepts

* **Frontend Engine:** Vanilla HTML5, CSS3 Custom Variables (`:root`), and Semantic DOM structures.
* **Algorithmic Controller:** JavaScript (ES6+) Event Listeners, Dynamic Array Mapping, and DOM Manipulation.
* **Graphics Layer:** Scalable Vector Graphics (SVG) with standard XML Namespaces (`http://w3.org`).

---

## 📊 Algorithmic Complexity Analysis

The implementation utilizes an optimized, multi-pointer array accumulation methodology:

* **Time Complexity:** **O(n)**  
  The dataset is evaluated through linear pre-computation loops (calculating independent left-max and right-max structural peaks) before applying a single-pass summation. This avoids nested iterations (O(n²)) and runs efficiently even with large arrays.
* **Space Complexity:** **O(n)**  
  Memory space scales linearly to store structural metadata tracks (`leftMax`, `rightMax`, and `waterDetails`) proportional to the input size *n*.

---

## 📂 File Architecture

Ensure your local project directory structure matches this format:

```text
├── index.html       # Structural layout and application viewport
├── style.css        # Modular layout tokens and element styling rules
├── script.js        # Algorithmic engine and SVG graphic generation pipeline
└── README.md        # Technical documentation and analysis mapping
```

---

## 💻 How to Local Run

1. Clone or download this project repository folder to your local desktop environment.
2. Open the project root directory using **Visual Studio Code**.
3. Launch the application using one of the following options:
   * **With Extensions:** Install the **Live Server** extension in VS Code. Right-click inside `index.html` and choose **Open with Live Server**.
   * **Without Extensions:** Locate `index.html` inside your operating system file browser and double-click the file to open it directly in any modern web browser.
****

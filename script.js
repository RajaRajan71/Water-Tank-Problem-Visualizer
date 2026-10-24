document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculateBtn");
    const inputArrayEl = document.getElementById("inputArray");
    const waterOutputEl = document.getElementById("waterOutput");
    const svgEl = document.getElementById("waterTankSvg");

    function computeWaterTank(heights) {
        const n = heights.length;
        if (n === 0) return { totalWater: 0, waterDetails: [] };

        const leftMax = new Array(n);
        const rightMax = new Array(n);
        const waterDetails = new Array(n).fill(0);

        leftMax[0] = heights[0];
        for (let i = 1; i < n; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], heights[i]);
        }

        rightMax[n - 1] = heights[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i + 1], heights[i]);
        }

        let totalWater = 0;
        for (let i = 0; i < n; i++) {
            const waterLevel = Math.min(leftMax[i], rightMax[i]);
            if (waterLevel > heights[i]) {
                waterDetails[i] = waterLevel - heights[i];
                totalWater += waterDetails[i];
            }
        }

        return { totalWater, waterDetails };
    }

    function renderVisualization(heights, waterDetails) {
        svgEl.innerHTML = "";
        
        const n = heights.length;
        if (n === 0) return;

        const maxHeight = Math.max(...heights, ...heights.map((h, i) => h + waterDetails[i]), 1);
        
        const svgWidth = 800;
        const svgHeight = 350;
        const padding = 40;
        
        const chartWidth = svgWidth - (padding * 2);
        const chartHeight = svgHeight - (padding * 2);
        
        const colWidth = chartWidth / n;
        const scaleY = chartHeight / maxHeight;

        // Draw Grid Lines
        let gridGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        for (let i = 0; i <= maxHeight; i++) {
            const y = svgHeight - padding - (i * scaleY);
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", padding);
            line.setAttribute("y1", y);
            line.setAttribute("x2", svgWidth - padding);
            line.setAttribute("y2", y);
            line.setAttribute("stroke", "#f1f5f9");
            line.setAttribute("stroke-width", "1");
            gridGroup.appendChild(line);
        }
        svgEl.appendChild(gridGroup);

        // Draw Bars and Water
        for (let i = 0; i < n; i++) {
            const x = padding + (i * colWidth);
            const hBlock = heights[i] * scaleY;
            const yBlock = svgHeight - padding - hBlock;

            const hWater = waterDetails[i] * scaleY;
            const yWater = yBlock - hWater;

            // Render Water Layer (if any)
            if (hWater > 0) {
                const waterRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                waterRect.setAttribute("x", x + 1);
                waterRect.setAttribute("y", yWater);
                waterRect.setAttribute("width", colWidth - 2);
                waterRect.setAttribute("height", hWater);
                waterRect.setAttribute("fill", "var(--water-color)");
                svgEl.appendChild(waterRect);
            }

            // Render Block Layer
            if (hBlock > 0) {
                const blockRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                blockRect.setAttribute("x", x + 1);
                blockRect.setAttribute("y", yBlock);
                blockRect.setAttribute("width", colWidth - 2);
                blockRect.setAttribute("height", hBlock);
                blockRect.setAttribute("fill", "var(--block-color)");
                blockRect.setAttribute("rx", "2");
                svgEl.appendChild(blockRect);
            }

            // Index label at the bottom
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", x + (colWidth / 2));
            text.setAttribute("y", svgHeight - padding + 20);
            text.setAttribute("text-anchor", "middle");
            text.setAttribute("font-size", "12");
            text.setAttribute("fill", "#64748b");
            text.textContent = heights[i];
            svgEl.appendChild(text);
        }
    }

    function handleCalculation() {
        const rawInput = inputArrayEl.value;
        const heights = rawInput.split(',').map(item => parseInt(item.trim(), 10)).filter(num => !isNaN(num));

        const { totalWater, waterDetails } = computeWaterTank(heights);
        waterOutputEl.textContent = totalWater;
        renderVisualization(heights, waterDetails);
    }

    calculateBtn.addEventListener("click", handleCalculation);

    // Initial load with example input
    handleCalculation();
});
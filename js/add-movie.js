function populateSelectOptions() {
    const genreSelect = document.getElementById("genre");
    const yearSelect = document.getElementById("release-year");
    const languageSelect = document.getElementById("language");

    // Thêm genre từ categories
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.name;
        option.textContent = category.name;
        genreSelect.appendChild(option);
    });

    // Thêm year từ 1950 đến năm hiện tại
    const currentYear = new Date().getFullYear();
    for (let year = 1950; year <= currentYear; year++) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    // Thêm ngôn ngữ mẫu
    const languages = ["English", "Vietnamese", "Japanese", "Korean", "French", "Spanish"];
    languages.forEach(lang => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = lang;
        languageSelect.appendChild(option);
    });
}

populateSelectOptions();



// Lắng nghe sự kiện click trên các liên kết trong thanh điều hướng
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Xóa class 'active' từ tất cả các liên kết
        document.querySelectorAll('.nav-link').forEach(function(link) {
            link.classList.remove('active');
        });

        // Thêm class 'active' vào liên kết hiện tại
        this.classList.add('active');

        // Lấy phần tử cần hiển thị từ thuộc tính 'data-section' của liên kết
        const sectionToShow = this.getAttribute('data-section');

        // Ẩn tất cả các section
        document.querySelectorAll('.section').forEach(function(section) {
            section.classList.add('hidden');
        });

        // Hiển thị phần tử tương ứng
        document.getElementById(sectionToShow).classList.remove('hidden');
    });
});


let currentPage = 1;

function renderPagination(sectionId, totalPages) {
    const paginationEl = document.getElementById(`${sectionId}-pagination`);
    paginationEl.innerHTML = "";

    if (totalPages <= 1) {
        paginationEl.innerHTML = `<button class="page-btn active" onclick="goToPage('${sectionId}', 1)">1</button>`;
        return;
    }

    let buttons = [];
    for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
    }

    if (totalPages > 6) {
        if (currentPage <= 3) {
            buttons = [1, 2, 3, "...", totalPages];
        } else if (currentPage >= totalPages - 2) {
            buttons = [1, "...", totalPages - 2, totalPages - 1, totalPages];
        } else {
            buttons = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
        }
    }

    buttons.forEach(page => {
        const pageButton = document.createElement("button");
        pageButton.className = `page-btn ${page === currentPage ? "active" : ""}`;
        pageButton.textContent = page;
        pageButton.onclick = () => goToPage(sectionId, page);
        paginationEl.appendChild(pageButton);
    });
}

function goToPage(sectionId, page) {
    currentPage = page;
    const sectionData = getSectionData(sectionId);
    const itemsPerPage = getItemsPerPage(sectionId);
    const paginatedData = paginateData(sectionData, itemsPerPage, currentPage);
    renderSectionData(sectionId, paginatedData);
    renderPagination(sectionId, Math.ceil(sectionData.length / itemsPerPage));
}

function getSectionData(sectionId) {
    switch (sectionId) {
        case 'dashboard':
            return movies;
        case 'movies-list':
            return movies;
        case 'favorites-movies':
            return favoriteMovies;
        case 'categories':
            return categories;
        case 'users-manager':
            return users;
        default:
            return [];
    }
}

function getItemsPerPage(sectionId) {
    switch (sectionId) {
        case 'dashboard':
            return 5;
        case 'movies-list':
            return 10;
        case 'favorites-movies':
            return 10;
        default:
            return 10;
    }
}

function paginateData(data, pageSize, pageNumber) {
    const startIndex = (pageNumber - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
}

function renderSectionData(sectionId, data) {
    const section = document.getElementById(sectionId);
    const tableBody = section.querySelector("tbody");
    tableBody.innerHTML = "";

    data.forEach(val => {
        const row = document.createElement("tr");

        let actionButtons = `
            <button class="btn-action" id="edit-${val.id}" onclick="edit('${sectionId}', '${val.id}', ') ">
                <i class="fi fi-rr-pencil"></i>
            </button>
            <button class="btn-action" id="delete-${val.id}" onclick="deleteItem('${sectionId}', '${val.id}') ">
                <i class="fi fi-rr-trash"></i>
            </button>
        `;

        if (sectionId === 'favorites-movies') {
            actionButtons = `
                <button class="btn-action" id="view-${val.id}" onclick="view('${sectionId}', '${val.id}') ">
                    <i class="fi fi-rr-eye"></i>
                </button>
                <button class="btn-action" id="unfavorite-${val.id}" onclick="deleteItem('${sectionId}', '${val.id}') ">
                    <i class="fi fi-rr-heart"></i>
                </button>
            `;
        }

        if (sectionId === 'users-manager') {
            row.innerHTML = `
                <td>${val.id}</td>
                <td>${val.fullname}</td>
                <td>${val.email}</td>
                <td>${val.role}</td>
                <td class="actions-button">
                    ${actionButtons}
                </td>
            `;
        } else if (sectionId === 'categories') {
            row.innerHTML = `
                <td>${val.id}</td>
                <td>${val.created_at}</td>
                <td>${val.name}</td>
                <td class="actions-button">
                    ${actionButtons}
                </td>
            `;
        } else {
            row.innerHTML = `
                <td>${val.id}</td>
                <td>${val.name}</td>
                <td>${val.genre}</td>
                <td>${val.language}</td>
                <td>${val.year}</td>
                <td class="actions-button">
                    ${actionButtons}
                </td>
            `;
        }

        tableBody.appendChild(row);
    });
}

function view(sectionId, Id) {
    alert(`Viewing item with ID: ${Id} from section: ${sectionId}`);
}

function edit(sectionId, Id) {
    alert(`Editing item with ID: ${Id} from section: ${sectionId}`);
}

function deleteItem(sectionId, Id) {
    const sectionData = getSectionData(sectionId);
    const itemIndex = sectionData.findIndex(item => item.id === Id);
    const currentPage = Math.ceil((itemIndex + 1) / getItemsPerPage(sectionId));
    if (itemIndex !== -1) {
        sectionData.splice(itemIndex, 1);
        renderSectionData(sectionId, paginateData(getSectionData(sectionId), getItemsPerPage(sectionId), currentPage || 1));
        renderPagination(sectionId, Math.ceil(sectionData.length / getItemsPerPage(sectionId)));
    }
}


function initializeSections() {
    renderSectionData("dashboard", paginateData(getSectionData('dashboard'), getItemsPerPage('dashboard'), currentPage));
    renderPagination("dashboard", Math.ceil(getSectionData('dashboard').length / getItemsPerPage('dashboard')));

    renderSectionData("movies-list", paginateData(getSectionData('movies-list'), getItemsPerPage('movies-list'), currentPage));
    renderPagination("movies-list", Math.ceil(getSectionData('movies-list').length / getItemsPerPage('movies-list')));

    renderSectionData("favorites-movies", paginateData(getSectionData('favorites-movies'), getItemsPerPage('favorites-movies'), currentPage));
    renderPagination("favorites-movies", Math.ceil(getSectionData('favorites-movies').length / getItemsPerPage('favorites-movies')));

    renderSectionData("categories", paginateData(getSectionData('categories'), getItemsPerPage('categories'), currentPage));
    renderPagination("categories", Math.ceil(getSectionData('categories').length / getItemsPerPage('categories')));

    renderSectionData("users-manager", paginateData(getSectionData('users-manager'), getItemsPerPage('users-manager'), currentPage));
    renderPagination("users-manager", Math.ceil(getSectionData('users-manager').length / getItemsPerPage('users-manager')));
}

initializeSections();

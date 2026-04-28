document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Data
    let storedData = localStorage.getItem('kwalityMenuData');
    let menuData = storedData ? JSON.parse(storedData) : window.defaultMenuData;

    // Elements
    const addForm = document.getElementById('add-form');
    const categorySelect = document.getElementById('item-category');
    const nameInput = document.getElementById('item-name');
    const priceInput = document.getElementById('item-price');
    const isSubtitleCheck = document.getElementById('is-subtitle');
    const successMsg = document.getElementById('success-msg');
    
    const manageCategorySelect = document.getElementById('manage-category');
    const itemList = document.getElementById('item-list');
    const resetBtn = document.getElementById('reset-db');

    // Utility to save to LocalStorage
    function saveDatabase() {
        localStorage.setItem('kwalityMenuData', JSON.stringify(menuData));
        renderItemList(manageCategorySelect.value);
    }

    // Toggle Price input if Subtitle is checked
    isSubtitleCheck.addEventListener('change', (e) => {
        if(e.target.checked) {
            priceInput.disabled = true;
            priceInput.value = '';
        } else {
            priceInput.disabled = false;
        }
    });

    // Handle Form Submit (Add Item)
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const category = categorySelect.value;
        const name = nameInput.value.trim();
        const price = priceInput.value.trim();
        const isSubtitle = isSubtitleCheck.checked;

        if (!menuData[category]) {
            menuData[category] = [];
        }

        const newItem = isSubtitle 
            ? { subtitle: name } 
            : { id: Date.now().toString(), name: name, price: price };

        menuData[category].push(newItem);
        saveDatabase();

        // Show success, clear form
        successMsg.style.display = 'block';
        setTimeout(() => successMsg.style.display = 'none', 3000);
        nameInput.value = '';
        priceInput.value = '';
        
        // Auto-switch manage tab to the one just added to
        manageCategorySelect.value = category;
        renderItemList(category);
    });

    // Render Items for Management
    function renderItemList(category) {
        itemList.innerHTML = '';
        const items = menuData[category] || [];
        
        if(items.length === 0) {
            itemList.innerHTML = '<p style="color: #666; padding: 1rem;">No items in this category.</p>';
            return;
        }

        items.forEach((item, index) => {
            const div = document.createElement('div');
            
            if (item.subtitle) {
                div.className = 'list-item subtitle-item';
                div.innerHTML = `
                    <span>--- ${item.subtitle} ---</span>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                `;
            } else {
                div.className = 'list-item';
                div.innerHTML = `
                    <div class="list-item-info">
                        <span class="list-item-name">${item.name}</span>
                        <span class="list-item-price">₹${item.price}</span>
                    </div>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                `;
            }

            itemList.appendChild(div);
        });

        // Attach delete handlers
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.target.getAttribute('data-index');
                if(confirm('Are you sure you want to delete this item?')) {
                    menuData[category].splice(idx, 1);
                    saveDatabase();
                }
            });
        });
    }

    // Switch Management Category
    manageCategorySelect.addEventListener('change', (e) => {
        renderItemList(e.target.value);
    });

    // Handle Reset DB
    resetBtn.addEventListener('click', () => {
        if(confirm('WARNING: This will delete all custom items and restore the default menu. Are you sure?')) {
            localStorage.removeItem('kwalityMenuData');
            menuData = JSON.parse(JSON.stringify(window.defaultMenuData)); // Deep copy to avoid reference issues
            renderItemList(manageCategorySelect.value);
            alert('Database reset successfully.');
        }
    });

    // Initial Render
    renderItemList(manageCategorySelect.value);

});

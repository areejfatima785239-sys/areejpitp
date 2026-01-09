// Department Data
const departments = [
    {
        id: 1,
        name: "Software Engineering",
        code: "SE",
        description: "Focuses on software development, testing, and maintenance. Covers programming, algorithms, databases, and software project management.",
        head: "Dr. Ali Raza",
        students: 850,
        courses: 45
    },
    {
        id: 2,
        name: "Computer Systems Engineering",
        code: "CSE",
        description: "Deals with computer hardware, networking, and embedded systems. Includes digital logic, computer architecture, and network security.",
        head: "Dr. Sara Khan",
        students: 720,
        courses: 38
    },
    {
        id: 3,
        name: "Civil Engineering",
        code: "CE",
        description: "Focuses on design, construction, and maintenance of infrastructure. Includes structural engineering, transportation, and environmental engineering.",
        head: "Prof. Ahmed Hassan",
        students: 950,
        courses: 42
    },
    {
        id: 4,
        name: "Electrical Engineering",
        code: "EE",
        description: "Covers power systems, electronics, and control systems. Includes circuit theory, power electronics, and renewable energy systems.",
        head: "Dr. Fatima Noor",
        students: 880,
        courses: 40
    },
    {
        id: 5,
        name: "Mechanical Engineering",
        code: "ME",
        description: "Focuses on mechanics, thermodynamics, and manufacturing. Includes machine design, fluid mechanics, and robotics.",
        head: "Prof. Bilal Ahmed",
        students: 920,
        courses: 44
    },
    {
        id: 6,
        name: "Chemical Engineering",
        code: "ChE",
        description: "Deals with chemical processes and industrial production. Includes process design, reactor engineering, and petroleum refining.",
        head: "Dr. Zainab Malik",
        students: 650,
        courses: 36
    },
    {
        id: 7,
        name: "Biomedical Engineering",
        code: "BME",
        description: "Combines engineering principles with medical sciences. Includes medical instrumentation, biomaterials, and tissue engineering.",
        head: "Dr. Omar Farooq",
        students: 480,
        courses: 32
    },
    {
        id: 8,
        name: "Telecommunication Engineering",
        code: "TE",
        description: "Focuses on communication systems and networks. Includes wireless communications, signal processing, and optical fiber networks.",
        head: "Dr. Hina Shah",
        students: 600,
        courses: 35
    }
];

// Display departments
function displayDepartments(deptArray) {
    const container = document.getElementById('departmentsContainer');
    const noResults = document.getElementById('noResults');
    
    // Clear container
    container.innerHTML = '';
    
    if (deptArray.length === 0) {
        noResults.classList.remove('d-none');
        return;
    }
    
    noResults.classList.add('d-none');
    
    // Create department cards
    deptArray.forEach(dept => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 mb-4';
        
        col.innerHTML = `
            <div class="card dept-card h-100">
                <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">${dept.name}</h5>
                    <small>Code: ${dept.code}</small>
                </div>
                <div class="card-body">
                    <p class="card-text">${dept.description}</p>
                    <div class="row text-center mt-3">
                        <div class="col-6">
                            <div class="text-primary fw-bold">${dept.students}</div>
                            <small class="text-muted">Students</small>
                        </div>
                        <div class="col-6">
                            <div class="text-primary fw-bold">${dept.courses}</div>
                            <small class="text-muted">Courses</small>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-transparent">
                    <small class="text-muted">
                        <i class="fas fa-user-tie me-1"></i>
                        Department Head: ${dept.head}
                    </small>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Search filter function
function filterDepartments() {
    const searchTerm = document.getElementById('searchDept').value.toLowerCase();
    
    if (!searchTerm) {
        displayDepartments(departments);
        return;
    }
    
    const filtered = departments.filter(dept => 
        dept.name.toLowerCase().includes(searchTerm) ||
        dept.code.toLowerCase().includes(searchTerm) ||
        dept.description.toLowerCase().includes(searchTerm) ||
        dept.head.toLowerCase().includes(searchTerm)
    );
    
    displayDepartments(filtered);
}

// Clear search
function clearSearch() {
    document.getElementById('searchDept').value = '';
    displayDepartments(departments);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Display all departments initially
    displayDepartments(departments);
    
    // Add event listeners
    document.getElementById('searchDept').addEventListener('input', filterDepartments);
    document.getElementById('clearSearch').addEventListener('click', clearSearch);
});
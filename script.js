document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const cgpa = document.getElementById('cgpa').value;

    // Validate CGPA
    if (cgpa < 0 || cgpa > 10) {
        alert('CGPA must be between 0 and 10');
        return;
    }

    // Create course name mapping
    const courseNames = {
        'CSE': 'Computer Science Engineering',
        'ECE': 'Electronics & Communication',
        'ME': 'Mechanical Engineering',
        'CE': 'Civil Engineering',
        'IT': 'Information Technology'
    };

    // Display success message
    const studentDetails = `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Phone:</strong> ${phone}<br>
        <strong>Course:</strong> ${courseNames[course]}<br>
        <strong>CGPA:</strong> ${cgpa}
    `;

    document.getElementById('studentDetails').innerHTML = studentDetails;
    document.getElementById('successMessage').style.display = 'block';

    // Reset form after submission
    this.reset();

    // Log to console (simulates backend submission)
    console.log('Student Registered:', {
        name: name,
        email: email,
        phone: phone,
        course: course,
        cgpa: cgpa,
        timestamp: new Date().toISOString()
    });
});

// Add input validation
document.getElementById('cgpa').addEventListener('blur', function() {
    if (this.value < 0 || this.value > 10) {
        alert('CGPA must be between 0 and 10');
        this.value = '';
    }
});

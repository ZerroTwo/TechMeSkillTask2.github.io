const coursesAvailable = document.querySelectorAll('.course__available');

//Выдача галочек параграфам
coursesAvailable.forEach(course => {
   [...course.children].forEach(child => child.classList.add('_icon-check'));
})


const draggables = document.querySelectorAll('.draggable')
const containers  =  document.querySelectorAll('.container')

draggables.forEach(draggables => {
    draggable.addEventListener('dragstart', () => {
        draggables.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })

containers.forEach(container = > {
    container.addEventListener('dragover', () => {
    console.log('drag over')
    })
})

})
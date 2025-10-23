function addtodo() {
    const date = document.querySelector('.date');
    const list = document.querySelector('.list');
    const input = document.querySelector('.js-input');

    const oldwarning = document.querySelector('.warning');
    if(oldwarning) oldwarning.remove();

    if(!input.value) {
        const warning = document.createElement('p');
        warning.textContent = 'You forget to write out ur task, numbskull!';
        warning.style.color = 'orangered';
        warning.classList.add('warning');
        list.before(warning);
        return;
    };

    const activity = document.createElement('div');
    activity.textContent = input.value;
    const dueDate = document.createElement('div');
    dueDate.textContent = date.value;

    const remove = document.createElement('button');
    remove.textContent = 'Delete';
    remove.classList.add('remove');
    remove.addEventListener('click', () => {
        activity.remove();
        dueDate.remove();
        remove.remove();
    });

    list.append(activity, dueDate, remove);
    input.value = '';
}
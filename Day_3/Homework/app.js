// ES5 OOP 

// Contact Constructor
function Contact(task){
    this.task = task;
  }
  
  // UI Constructor
  function UI(){
  
  }
  
  UI.prototype.addContact = function(contact){
    const list = document.getElementById('task-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.task}</td>
      <td><a class="delete" style="cursor: pointer;">x</a></td>
    `;
  
    list.appendChild(row);
  }
  
  UI.prototype.clearFields = function(){
    document.getElementById('task').value = '';
  }
  
  UI.prototype.contentEditable = function(target){
    if(target.className === 'edit'){
      target.parentElement.parentElement.edit();
    }
  }
  
  // Event Listeners
  document.getElementById('contact-form').addEventListener('submit',
    function(e){
      const name = document.getElementById('task').value;
      
      const contact = new Contact(task);
      
      const ui = new UI();
      ui.addTask(task);
      ui.clearFields();
    
      e.preventDefault();  
  });
  
  // Delete Contact
  document.getElementById('task-list').addEventListener('click',
    function(e){
      const ui = new UI();
      ui.deleteBook(e.target);
      e.preventDefault();
  });
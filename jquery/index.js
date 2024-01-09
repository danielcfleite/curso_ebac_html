$("#send-form").click((event) => {
  event.preventDefault();
  const taskValue = $("#task-input").val();
  if (!taskValue) {
    alert("preencher task");
    return;
  }
  const buttonElement = $("<button>", {
    text: "deletar",
    class: "deletar",
    click: deleteTask,
  });
  const newTask = $("<li>", {
    text: `taskValue.toString()`,
    class: "task",
    click: complete,
    "data-completed": "false",
  });

  $(newTask).append(buttonElement);

  $("#tasks-list").append(newTask);

  function complete() {
    if ($(this).attr("data-completed") === "false") {
      $(this).addClass("completed");
      $(this).attr("data-completed", "true");
      let isCompleted = $(this).attr("data-completed");
      console.log(isCompleted);
    } else {
      $(this).removeClass("completed");
      $(this).attr("data-completed", "false");
    }
  }

  function deleteTask() {
    $(this).parent().addClass("removed");
  }
});

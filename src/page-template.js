//icon script

roleInfo = (employee) => {
    if (employee.getRole() === "Manager") {
       return `Office Number: ${employee.officeNumber}`
    } else if (employee.getRole() === "Engineer") {
       return `GitHub Username: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>`
    } else if (employee.getRole() === "Intern") {
        return `School: ${employee.school}`
    }
}

getIcon = (employee) => {
    if (employee.getRole() === "Manager") {
        return `<i class="fas fa-coffee"></i>`
     } else if (employee.getRole() === "Engineer") {
        return `<i class="fas fa-glasses"></i>`
     } else if (employee.getRole() === "Intern") {
         return `<i class="fas fa-graduation-cap"></i>`
     }
 }


const createCard = function (employee) {
    let card = '';

    for (let i = 0; i < employee.length; i++) {
        
        card += `<div class= "card" style="width: 18rem;">
                    <div class = "card-header card-title text-white bg-primary">
                        ${employee[i].name}
                        <br>
                        ${getIcon(employee[i])} ${employee[i].getRole()}
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee[i].id}</li>
                            <li class="list-group-item"><a href = "mailto: ${employee[i].email}">Email: ${employee[i].email}</a></li>
                            <li class="list-group-item">${roleInfo(employee[i])}</li>
                        </ul>
                    </div>
                </div>`
    }
    return card;
}

const generatePage = function(employee) {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
        <header>
            <h1 class = "mt-3 text-center text-white bg-danger">My Team</h1>
        </header>

            <div class="container d-flex justify-content-between">
                ${createCard(employee)}
            </div>
    </body>
    </html>`
}



module.exports = generatePage


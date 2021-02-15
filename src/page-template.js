
//issue 1: will not create multiple cards
// issue 2: role and unique employee undefined 

    

const createCard = function (employee) {

   
    for (let i = 0; i < employee.length; i++) {

        roleInfo = (employee) => {
            if (employee.role === "Manager") {
               return `Office Number: ${employee[i].officeNumber}`
            } else if (employee.role === "Engineer") {
               return `GitHub Username: <a href="https://github.com/${employee[i].github}" target="_blank">${employee[i].github}</a>`
            } else if (employee.role === "Intern") {
                return `School: ${employee[i].school}`
            }
        }
        
        return `<div class= "card" style="width: 18rem;">
                    <div class = "card-header card-title text-white bg-primary">
                        ${employee[i].name}
                        <br>
                        Pic, Title
                    </div>
                    <div class="card-body bg-light">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee[i].id}</li>
                        <li class="list-group-item"><a href = "mailto: ${employee[i].email}">Email: ${employee[i].email}</a></li>
                        <li class="list-group-item">${employee[i].roleInfo}</li>
                     </ul>
                </div>`
                    
           
    }
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
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
        <header>
            <h1 class = "mt-3 text-center text-white bg-danger">My Team</h1>
        </header>
        <main>

            <div class="container">

            ${createCard(employee)}

            </div>

    </body>
    </html>`
}



module.exports = generatePage




    

const createCard = function (employee) {

   
    for (let i = 0; i < employee.length; i++) {

        roleInfo = (employee) => {
            if (employee.role === "Manager") {
               return `Office Number: ${employee[i].officeNumber}`
            } else if (employee.role === "Engineer") {
               return `GitHub Username: ${employee[i].github}`
            } else if (employee.role === "Intern") {
                return `School: ${employee[i].school}`
            }
        }
        
        return `<div class= "card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${employee[i].name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${employee[i].title}</h6>
                        <p 
                        class="card-text">ID: ${employee[i].id}</p>
                        <p class="card-text">Email: ${employee[i].email}</p>
                        <p class="card-text">${employee[i].roleInfo}</p>
                    </div>
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
            <h1 class = "mt-3 text-center">My Team</h1>
        </header>
        <main>

            <div class="container">

            ${createCard(employee)}

            </div>

    </body>
    </html>`
}



module.exports = generatePage


function ValidateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById('email').value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function testingStuff ()    {
    console.log('testing');
}

document.getElementById("send_email_btn").onClick = function()  {ValidateEmail()};
document.getElementById("send_email_btn").onClick = function() {testingStuff()};
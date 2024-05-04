//1. **Basic Rest Parameters**:
function sumAll (...param)
{
    let total = 0;
    for (let i=0;i<arguments.length;i++)
    {
        total += arguments[i];
    }
    console.log(total);
}

sumAll(1,2,3);       //Expected output 6
sumAll(1,2,3,4);     //Expected output 10
sumAll(1,2,3,4,5);   //Expected output 15

//2. **Rest Parameters with Other Parameters**:
function userInfo(fisrtName, lastName, ...hobbies)
{
    let userHobbies = [];
    let userName = {
        name: fisrtName+' '+lastName
    };

    for (let i=2;i<arguments.length;i++)
    {
        userHobbies.push(arguments[i]);
    }

    console.log(userName);
    console.log(userHobbies);
}

userInfo("sushant","gupta","cricket","cooking","bike riding");

userInfo("sam","mahajan","running","badminton","reading","gardening");
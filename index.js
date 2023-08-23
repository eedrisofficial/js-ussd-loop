function gtbUssd() {
  let gtCode = prompt("Enter GTB USSD(*737#)");

  if (gtCode === "*737#") {
    let options;
    while (true) {
      options = prompt(
        "\n1. Airtime self \n2. Airtime others \n3. Transfer-GTB \n4. Transfer others \n5. Pay bills"
      );

      if (options === null) {
        break; // Exit the loop if the user cancels
      }

      switch (options) {
        // AIRTIME SELF
        case "1":
          prompt("Enter amount");
          alert("successful");
          break;

        // AIRTIME OTHERS
        case "2":
          let number = prompt("Enter Third Party Number");
          if (number.length === 11) {
            prompt("Enter amount");
            let pin = prompt("Enter pin");
            if (pin.length === 4) {
              alert("Successful");
            } else {
              alert("wrong pin");
            }
          } else {
            alert("Wrong Number");
          }
          break;

        // GTB TO GTB TRANSFER
        case "3":
          let acct = prompt("Enter account number");
          if (acct.length === 10) {
            prompt("Enter amount");
            let pin = prompt("Enter pin");
            if (pin.length === 4) {
              alert("processing, you will receive a message shortly");
            } else {
              alert("wrong pin");
            }
          } else {
            alert("wrong account number");
          }
          break;

        // GTB TO OTHER BANKS TRANSFER
        case "4":
          let select;
          while (true) {
            select = prompt(
              "\n1. Access bank \n2. First bank  \n3. Fidelity bank \n4. UBA \n5. Others"
            );

            if (select === null) {
              break; // Exit the inner loop if the user cancels
            }

            switch (select) {
              case "1":
              case "2":
              case "3":
              case "4":
                let bacct = prompt("Enter account number");
                if (bacct.length === 10) {
                  prompt("Enter amount");
                  let pin = prompt("Enter pin");
                  if (pin.length === 4) {
                    alert("processing, you will receive a message shortly");
                  } else {
                    alert("wrong pin");
                  }
                } else {
                  alert("wrong account number");
                }
                break;

              case "5":
                alert(
                  "Other banks are not available at the moment, try again later"
                );
                break;

              default:
                alert("Invalid selection for other banks");
                break;
            }
          }
          break;

        // PAY BILLS
        case "5":
          let bills;
          while (true) {
            bills = prompt("\n1. Electricity bill \n2. DSTV");

            if (bills === null) {
              break; // Exit the inner loop if the user cancels
            }

            switch (bills) {
              case "1":
                prompt("Enter your meter number");
                prompt("Enter amount");
                let pin = prompt("Enter pin");
                if (pin.length === 4) {
                  alert("your RRR is 90088761345456567456");
                } else {
                  alert("wrong pin");
                }
                break;

              case "2":
                prompt("Enter your card Number");
                prompt("Enter amount");
                alert(
                  "Congratulations You've activated a monthly premium Subscription"
                );
                break;

              default:
                alert("Invalid selection for bills");
                break;
            }
          }
          break;

        default:
          alert("Invalid selection");
          break;
      }
    }
  } else {
    alert("Please enter the correct USSD for GT bank.");
  }
}

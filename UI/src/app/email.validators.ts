import { FormControl } from "@angular/forms";



/*export class Email {

static emailValidator(control: FormControl): { [i: string]: boolean } {

    let email: string = control.value;

    if (email !== null && email !== undefined && email !== "") {

        email = email.trim();

        const EMAIL_REGEXP = /^.+@([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}$/i;

        if (

            email &&

            email.toLocaleUpperCase() !== "N/A" &&

            (email.length <= 5 || !EMAIL_REGEXP.test(email))

        ) {

            return { incorrectMailFormat: true };

        }

    } else {



    }

}

}*/
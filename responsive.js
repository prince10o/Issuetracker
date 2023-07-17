@media only screen and (max-width: 1300px) {
    .container {
        width: 1100px;
    }
}
@media only screen and (max-width: 1200px) {
    .container {
        width: 1000px;
    }
}
@media only screen and (max-width: 1100px) {
    .container {
        width: 900px;
    }
    .issue_info .rows > div {
        padding: 8px 0px;
    }

    .issue_info .currStatus {
        font-weight: 500;
        letter-spacing: 0px;
    }
}
@media only screen and (max-width: 1024px) {
    .container {
        width: 850px;
    }
}
@media only screen and (max-width: 900px) {
    .container {
        width: 100%;
    }
    .descriptionSearch input#search {
        width: 155px;
    }
}
@media only screen and (max-width: 830px) {
    .issueInfo_section .heading_buttons,
    .issueInfo_section .issue_info .rows {
        grid-template-columns: 0.3fr 3fr 1.5fr 0.8fr 1fr 0.8fr;
    }
    .descriptionSearch input#search {
        width: 115px;
    }
}
@media only screen and (max-width: 700px) {
    header .logo h1 {
        font-size: 1.8rem;
    }
    .mainForm_section h2 {
        font-size: 1.4rem;
    }
    .mainForm_section form {
        width: 80%;
    }
    .mainForm_section .form-control {
        grid-template-columns: 90px 0.8fr 0.8fr;
        /* grid-gap: 0px; */
    }
    .mainForm_section input {
        width: 96%;
    }

    .descriptionSection div:nth-child(2) {
        grid-column: 2/4;
    }
    .descriptionSection div:last-child {
        margin-left: 10px;
        grid-column: 2/-1;
    }

    .issueInfo_section {
        width: 100%;
        overflow-x: scroll;
    }
    .issueInfo_section .heading_buttons,
    .issueInfo_section .issue_info .rows {
        grid-template-columns: 28px 295px 160px 80px 94px 75px;
    }
    .rows {
        width: max-content;
    }
    .calculation_section .local_storage_clear_content {
        display: none;
    }
}
@media only screen and (max-width: 490px) {
    .mainForm_section .form-control {
        grid-template-columns: 90px 1fr 0.8fr;
        grid-column-gap: 12px;
    }
    .calculation_section {
        padding: 5px 0px;
        grid-template-columns: repeat(3, 122px);
        justify-content: center;
        text-align: center;
    }
    .small-device-warning--content {
        width: 65%;
    }
}
@media only screen and (max-width: 430px) {
    .mainForm_section .form-control {
        grid-template-columns: 90px 1fr 0.2fr;
    }
    .prioritySection div:last-child,
    .assignedToSection div:last-child {
        grid-column: 2/-1;
    }
}
@media only screen and (max-width: 400px) {
    header .logo h1 {
        font-size: 1.6rem;
    }
    .mainForm_section h2 {
        font-size: 1.3rem;
    }
    header .nav {
        grid-template-columns: 130px;
    }
    header button.theme-change {
        border-radius: 8px;

        padding: 5px 0px;
    }
    header button.theme-change .button-round {
        border-radius: 8px;
    }
    .theme-change--names {
        font-size: 0.9rem;
    }
    form .submitButton button {
        border-radius: 8px;
        padding: 8px 45px;
    }
}
@media only screen and (max-width: 370px) {
    header .logo h1 {
        font-size: 1.4rem;
    }
    .mainForm_section h2 {
        font-size: 1.2rem;
    }
    .calculation_section {
        grid-template-columns: repeat(3, 105px);
        font-size: 0.9rem;
        text-align: center;
    }
}
/* Perfectly visible till 320px device width */
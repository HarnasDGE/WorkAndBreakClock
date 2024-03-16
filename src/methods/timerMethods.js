export const counter = () => {
    if(this.props.power === ON) {

        const actualRemainder = this.state.actualTask === SESSION 
            ? this.props.session
            : this.props.break;

        const currentDate = new Date();
        let targetDate = [...currentDate];
        console.log(`Aktualna data i czas: ${currentDate}`);
        targetDate.setMinutes(currentDate.getMinutes() + actualRemainder);

        console.log(`Odliczamy do daty: ${targetDate}`);
    }
}
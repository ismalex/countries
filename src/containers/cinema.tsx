
export default function Cinema() {
    const ticketValue = 25
    const testQueue = [25, 25, 50]
    /* const testQueue = [25, 25, 50, 50, 100] */


    function processDataQueue() {
        let billsAvailable = 0;
        let billsToGiveBack = 0;
        for (let i = 0; i < testQueue.length; i++) {
            let billsQueue: number = testQueue[i] / ticketValue
            console.log('bills on queue', billsQueue);
            if (testQueue[i] === ticketValue) {
                billsAvailable += 1
                console.log('billsAvailable', billsAvailable);
            } else {
                billsToGiveBack = billsQueue - 1;
                console.log('bills to give back', billsToGiveBack)
                console.log('billsAvailable', billsAvailable);
            }
        }
        if (billsToGiveBack > billsAvailable) {
            console.log('no vuelto')
            return "False - No vuelto"
        } else {
            console.log('vuelto')
            return "True - vuelto"
        }
    }

    return (
        <div>
            <input type='text'></input>
            <button onClick={() => processDataQueue()}>check</button>
            <br />
            Result :
            {/* CHECK CONSOLE  */}
        </div>
    )
}

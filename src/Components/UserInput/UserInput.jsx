
const UserInput = ({onChange, userData}) => {

    //   const initialInvestmentHandler = event => {
    //     setUserData(prevData => {
    //         return({
    //             ...prevData,
    //             initialInvestment : event.target.value
    //         })
    //     })
    //   }
    //   const annualInvestmentHandler = event => {
    //     setUserData(prevData => {
    //         return({
    //             ...prevData,
    //             annualInvestment : event.target.value
    //         })
    //     })
    //   }
    //   const expectedReturnHandler = event => {
    //     setUserData(prevData => {
    //         return({
    //             ...prevData,
    //             expectedReturn : event.target.value
    //         })
    //     })
    //   }
    //   const durationHandler = event => {
    //     setUserData(prevData => {
    //         return({
    //             ...prevData,
    //             duration : event.target.value
    //         })
    //     })
    //   }

  return (
    <section id='user-input'>
        <div className='input-group '>
            <p>
                <label>Initial Investment</label>
                <input type='number' required onChange={(event)=>onChange('initialInvestment', event)} value={userData.initialInvestment}/>
            </p>
            <p >
                <label>Anual Investment</label>
                <input type='number' required onChange={(event)=>onChange('annualInvestment', event)} value={userData.annualInvestment}/>
            </p>
        </div>
        <div className='input-group ' >
            <p>
                <label>Expected Return</label>
                <input type='number' required onChange={(event)=>onChange('expectedReturn', event)} value={userData.expectedReturn}/>
            </p>
            <p >
                <label>Duration</label>
                <input type='number' required onChange={(event)=>onChange('duration', event)} value={userData.duration}/>
            </p>
        </div>
    </section>
  )
}

export default UserInput

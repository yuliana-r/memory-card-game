/* eslint-disable react/prop-types */
export default function Modal(props) {

  function handleDialogClose() {
    if (props.handleCloseModal) {
      props.handleCloseModal();
    }
  }
  return(
    <>
      {
        props.showModal && (
          <dialog id="dialog" open={props.showModal}>
            <div className="outcome-modal">
              {props.outcome === 'lost' && (
                <>
                  <h1 className="outcome-header">
                    <i className="fa-solid fa-heart-crack"></i> 
                    Un-FURR-tunate Memory Slip
                  </h1>
                  <p className="outcome-text">
                    Oops! It seems you got a bit tangled in the yarn of cards. 
                    Don&apos;t worry, Charlie&apos;s here to lead you back to victory. 
                    Gather your wits and embark on another memory adventure!
                  </p>
                </>
              )}
              {props.outcome === 'won' && (
                <>
                  <h1 className="outcome-header">
                    <i className="fa-solid fa-heart"></i>
                    PAW-some Memory Marvel
                  </h1>
                  <p className="outcome-text">
                  You&apos;ve mastered the art of memory cards, just like Charlie masters napping 
                  in sunbeams.
                  Keep up the meow-nificent work and enjoy your well-earned victory! 
                  </p>
                </>
              )}
              <button onClick={handleDialogClose} className="play-again-btn">PLAY AGAIN</button>
            </div>
            
          </dialog>
        )
      }
    </>
  )
}
import APIKey from './homepage/APIKey'
import { useState } from 'react'

export default function RateLimit(props) {

  const [showRateLimitModal, setShowRateLimitModal] = useState()
  
  function clickedOffModal(e) {
		var modal = document.getElementById('rateLimitModal')
		if (e.target === modal) {
			setShowRateLimitModal(false)
		}
	}

  return (
    <>
      <div id='rateLimit'>
        <svg onClick={() => setShowRateLimitModal(true)} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="30px" height="30px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><circle cx="12" cy="12" r="10" stroke="gray" strokeWidth="2" /><path d="M11.5 7h.5" stroke="gray" strokeWidth="2" strokeLinecap="round" /><path d="M10 11h2v5" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 16h4" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
        <p><span>{props.rateRemaining}/{props.rateTotal}</span><br />Requests</p>
      </div>
      <div id='rateLimitModal' style={{ display: showRateLimitModal ? '' : 'none' }} onClick={(e) => clickedOffModal(e)}>
        <div className="modal-content">
          <span className="close" onClick={() => setShowRateLimitModal(false)}>&times;</span>
          <p style={{ fontSize: '20px' }}>This website was built using the Github API, which limits an IP address to 60 requests per hour. If you have a github account, you can get an API key <a href='https://github.com/settings/tokens' target='_blank' rel='noreferrer'>here</a> to get more requests, (typically 5000). If you would like to, enter it below. <br/><br/> Note: This is a frontend app using local storage, so this key will never leave your computer.</p>
          <APIKey getRateLimit={props.getRateLimit} />
        </div>
      </div>
    </>
  )
}
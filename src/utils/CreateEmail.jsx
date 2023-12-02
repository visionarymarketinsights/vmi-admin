
function CreateEmail(enquiryType, keyValueList) {
  const list = [...Object.keys(keyValueList).map(res => {
    return (`
        <tr style="solid #e2e8f0; background-color: #ffffff; border-color: #e2e8f0;">
        <th style="white-space: nowrap; padding:8px 12px; font-weight: 500; color: #2D3748;">${res.toUpperCase()}</th>
        <td style="padding:8px 12px;">${keyValueList[res]}</td>
      </tr>`)
  })].join('')

  return `
    <div style="position: relative; overflow-x: auto; padding: 2rem 0;">
    <table style="width:100%;text-align:left;font-size:14px;color:#888; border-spacing: 0px; border: 1px solid #666">
  <thead style="background-color:#666;text-transform:uppercase;color:#fff">
    <tr>
      <th style="padding:8px 12px; width: 20%;">ENQUIRY TYPE</th>
          <th style="padding: 8px 12px;">${enquiryType.toUpperCase()}</th>
        </tr>
      </thead>
      <tbody>
       ${list}
      </tbody>
    </table>
  </div>
  
    `
}

export default CreateEmail;


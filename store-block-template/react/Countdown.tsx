import React, { useState } from 'react';

interface LeadProps {}

const Lead: StorefrontFunctionComponent<LeadProps> = ({}) => {
  const [lead, setLead] = 
  return (
    <div>
      <h1>Teste.</h1>
    </div>
  )
}

Lead.schema = {
  title: 'editor.lead.title',
  description: 'editor.lead.description',
  type: 'object',
  properties: {},
}

export default Lead

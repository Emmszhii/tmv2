export const getPrimaryContactItem = (items, id) => {
  let primaryContact;
  const result = items?.data.filter(
    (item) => Number(item.primary_contact_client_id) === Number(id)
  );
  primaryContact = result.length > 0 ? result[0] : "";
  return primaryContact;
};
export const getBillingContactItem = (items, id) => {
  let billingContact;
  const result = items?.data.filter(
    (item) => Number(item.billing_contact_client_id) === Number(id)
  );
  billingContact = result.length > 0 ? result[0] : "";
  return billingContact;
};
export const getPreferredContactItem = (items, id) => {
  let preferredContact;
  const result = items?.data.filter(
    (item) => Number(item.preferred_contact_client_id) === Number(id)
  );
  preferredContact = result.length > 0 ? result[0] : "";
  return preferredContact;
};

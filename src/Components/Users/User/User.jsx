import "./User.css";
export default function User({ realName, name, email, address, company }) {
  return (
    <div className="user-card">
      <h2 className="user-realName">{realName}</h2>
      <p className="user-email">E-mail: {email}</p>
      <p className="user-address">City: {address}</p>
      <p className="user-company">Company: {company}</p>
      <p className="user-name">
        User name: <span>{name}</span>
      </p>
    </div>
  );
}

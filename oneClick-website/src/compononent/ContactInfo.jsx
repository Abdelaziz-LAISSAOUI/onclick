function ContactInfo({icon, info}) {
  return (
    <div className="flex justify-start gap-4 items-center mb-8 ">
        <img src={icon} alt="" />
        <span className="font-light text-xs">{info}</span>
    </div>
  )
}

export default ContactInfo
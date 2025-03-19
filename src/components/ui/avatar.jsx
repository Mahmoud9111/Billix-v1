const Avatar = ({ children, className = "" }) => {
  return (
    <div className={`inline-block ${className}`}>
      {children}
    </div>
  )
}

export { Avatar }

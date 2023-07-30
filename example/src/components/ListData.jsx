const ListData = ({messageList}) => {
    return (
        <>
        { messageList.map((message, index) => (
          <p id="message-bar" className={`text-${message.color} text-sm`} key={index}> 
            <div className="flex flex-row gap-2">
              <div>[{message.date}]</div>
              <div dangerouslySetInnerHTML={{ __html: message.text }}></div>
            </div>
          </p>
        ))}
        </>
    )
}

export default ListData
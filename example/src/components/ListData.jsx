const ListData = ({messageList}) => {
    return (
        <>
        { messageList.map((message, index) => (
          <section id="message-bar" className={`text-${message.color} text-sm flex flex-row gap-2`} key={index}> 
              <div>[{message.date}]</div>
              <div dangerouslySetInnerHTML={{ __html: message.text }}></div>
          </section>
        ))}
        </>
    )
}

export default ListData
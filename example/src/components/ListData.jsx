const ListData = ({messageList}) => {
    return (
        <>
        { messageList.map((message, index) => (
          <section id="message-bar" className={`text-${message.color} text-sm flex flex-row gap-2 ${message.error ? 'bg-red-500 px-2 py-1 my-1 italic' : ''}`} key={index}> 
              <div>[{message.date}]</div>
              <div dangerouslySetInnerHTML={{ __html: message.text }}></div>
          </section>
        ))}
        </>
    )
}

export default ListData
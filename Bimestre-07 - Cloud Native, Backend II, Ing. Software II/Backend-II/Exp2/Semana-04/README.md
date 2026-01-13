<div align="center">

![WebSocket](https://img.shields.io/badge/WebSocket-Realtime-010101?style=flat-square&logo=socketdotio&logoColor=white)
![Semana](https://img.shields.io/badge/Semana-04-blue?style=flat-square)

# `WebSockets & Real-time`

</div>

---

### 🔌 Configuración STOMP

```java
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements
        WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic", "/queue");
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws")
            .setAllowedOrigins("*")
            .withSockJS();
    }
}

@Controller
public class ChatController {

    @MessageMapping("/chat.send")
    @SendTo("/topic/messages")
    public Message sendMessage(Message message) {
        return message;
    }
}
```

| Protocolo | Uso |
|:----------|:----|
| STOMP | Mensajería |
| SockJS | Fallback HTTP |

---

<div align="center">
<sub>Backend II-III · Experiencia 2</sub>
</div>

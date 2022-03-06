---
title: 'Messages'
menuTitle: 'Messages'
description: ''
category: 'Features'
fullscreen: false 
position: 30
---

Messages can be sent to a Telegram chat using a `TelegraphChat` model

```php
use DefStudio\Telegraph\Models\TelegraphChat;

$chat = TelegraphChat::find(44);

// this will use the default parsing method set in config/telegraph.php
$chat->message('hello')->send();

$chat->html("<b>hello<b>\n\nI'm a bot!")->send();

$chat->markdown('*hello*')->send();
```

## Options

Telegraph allows sending complex messages by setting some options:

### protected

Protects message contents from forwarding and saving

```php
$chat->message("please don't share this")->protected()->send();
```

### silent

Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound.

```php
$chat->message("late night message")->silent()->send();
```

### withoutPreview

Disables link previews for links in this message

```php
$chat->message("http://my-blog.dev")->withoutPreview()->send();
```

### reply

The message can be sent as a reply by setting the origina message ID

```php
$chat->message("ok!")->reply(123456)->send();
```
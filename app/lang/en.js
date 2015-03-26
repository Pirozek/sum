var lang = {
    room_all: 'all',

    login_password: 'password:',
    login_submit: 'login',
    login_reset_key: 'reset key',
    
    nav_rooms: 'Rooms',
    
    menue_show_status_messages: 'show status notifications',
    menue_set_new_avatar: 'set new avatar',
    menue_remove_avatar: 'remove avatar',
    menue_about_sum: 'about sum',
    menue_quit: 'quit sum',
    
    menue_key_back: 'back',
    menue_key_cancel: 'cancel',
    menue_key_save: 'save',
    menue_key_password: 'password:',
    menue_key_password_new: 'new password:',
    menue_key_password_new_again: 'new password again:',
    menue_key_password_old: 'old password:',
    menue_key_password_again: 'password again:',
    menue_key_enable: 'Enabling the key management allows you to verify the identify of your communication partner',
    menue_key_enable_save: 'enable',
    menue_key_enable_password: 'You have to set a password for your own key. You have to enter this password on startup of SUM',
    menue_key_enable_password_save: 'enable',
    menue_key_manage: 'Here you can import the public keys of other users. For this user the identity will be verified.',
    menue_key_manage_add: 'add key',
    menue_key_manage_remove: 'remove',
    menue_key_password_change: 'You have to set a password for your own key. You have to enter this password on startup of SUM',
    menue_key_reset: 'Your private key will be reseted. Other user have to import your public key again.',
    menue_key_reset_save: 'reset',
    menue_key_share: 'Here you can export your public key. Other users have to import this in the menue "manage keys"',
    menue_key_export: 'Here you can export your public and <b>private</b> key. Don\'t hand over this file to anybody.',
    menue_key_import: 'Please enter the password for the key for importing.',
    menue_key_import_save: 'import',
    menue_key_disable: 'Here you can disable the key management. Your private key will be reseted.',
    menue_key_disable_save: 'disable',
    menue_key_entry_manage: 'manage keys',
    menue_key_entry_password: 'change key password',
    menue_key_entry_reset: 'reset key',
    menue_key_entry_share: 'share key',
    menue_key_entry_export: 'backup key',
    menue_key_entry_import: 'restore key',
    menue_key_entry_disable: 'disable key management',

    menue_usermessages: 'no open communication found',

    message_input_placeholder: 'write a message...',
    message_codebox_placeholder: 'Syntax-Highlighting',
    message_codebox_send: 'send',
    message_codebox_cancel: 'cancel',
    
    menue_message_code: 'send code',
    menue_message_file: 'send file',
    menue_message_clear: 'delete conversation',
    
    backend_client_send_error: 'There occured an error during communicating with %s',
    backend_client_send_not_reachable: 'User %s1 ist not reachable. Error: %s2',
    backend_client_file_not_available: 'The file is no longer available for downloading',
    
    backend_filesystem_write_error: 'Error on writing the file: %s',
    backend_filesystem_read_error: 'Error on reading the file: %s',
    backend_filesystem_read_json_error: 'Error on processing the file content',
    
    backend_server_invalid_message: 'invalid message of another user received',
    backend_server_invite_accepted: '%s accepted your invitation',
    backend_server_invalid_message_fields: 'invalid message of another user received',
    backend_server_invite_declined: '%s declined your invitation',
    backend_server_invalid_message_type: 'invalid message type received: %s',
    backend_server_init_error: 'Can\'t start server interface: %s',
    
    backend_userlist_file_read_error: 'Can\'t access userlist',
    backend_userlist_web_decrypt_error: 'Can\'t decrypt userlist',
    
    backend_already_in_room: 'You are already in this room',
    backend_invalid_user_room: 'Invalid user or room',
    backend_not_online: 'The user is not online',
    backend_file_invite_access_error: 'Error on accessing the file',
    backend_file_download_not_found: 'User not found or offline',
    backend_add_public_key_fileformat_error: 'Invalid file format',
    backend_add_public_key_already_imported: 'Key of this user already imported',
    backend_import_key_error: 'Importing of key failed',
    backend_file_read_error: 'Can\'t loading the file',
    
    frontend_command_gamez_found: 'games found: %s',
    frontend_command_gamez_not_found: 'game %s not gefunden',
    frontend_command_gamez_starting: 'starting %s',
    frontend_command_user_not_found: 'User %s not found',
    frontend_command_user_information: 'Information about user %s',
    frontend_command_version: 'version: ',
    frontend_command_versions_of_users: 'versions of users',
    frontend_command_reload: 'Userlist reloaded',
    frontend_command_unknown: 'unknown command',
    
    frontend_events_save_avatar_no_selection: 'Please select a visible area',
    frontend_events_validate_passwords_missing_field: 'Please enter all password fields',
    frontend_events_validate_passwords_not_equal_passwords: 'The new passwords are not equals',
    frontend_events_key_mangement_activated: 'Key management was activated',
    frontend_events_no_user_selected: 'Please choose a user',
    frontend_events_invalid_old_password: 'The old password is wrong',
    frontend_events_password_changed: 'Password successfully changed',
    frontend_events_confirm_app_restart: 'The application has to be restarted. Continue?',
    frontend_events_export_public_key_success: 'Public key successfully saved',
    frontend_events_export_key_success: 'Public and private key successfully exported. Don\'t share this file!',
    frontend_events_import_key_success: 'Public and private key successfully imported',
    frontend_events_confirm_disable: 'The private key will be deleted! Continue?',
    frontend_events_disable_success: 'Key management disabled',
    frontend_events_enter_message: 'Please enter a message',
    frontend_events_no_chat_channel_selected: 'Please choose a chat channel',
    frontend_events_select_room_not_in: 'Please accept or decline the invitation first',
    frontend_events_add_room_no_name: 'Please enter a name for the room',
    frontend_events_room_already_exists: 'There exists already a room with this name',
    frontend_events_user_with_roomname_exists: 'There exists already a user with this name',
    frontend_events_room_added: 'Room successfully created',
    frontend_events_invites_sent: 'Invitation successfully sent',
    frontend_events_confirm_room_leave: 'Really leave this room?',
    frontend_events_filetype_error: 'Please choose a file of the type PNG, JPG or GIF',
    frontend_events_add_room_placeholder: 'name of the room',
    frontend_events_add_room_save: 'add',
    frontend_events_add_room_cancel: 'cancel',
    frontend_events_invite: 'Invite more users in this group:',
    frontend_events_invite_save: 'invite',
    frontend_events_invite_cancel: 'cancel',
    frontend_events_invite_user_placeholder: 'users...',
    frontend_events_avatar_removed: 'avatar removed',
    frontend_events_key_reset_success: 'key successfully resetted',

    frontend_messages_new_download: 'New Download:',
    frontend_messages_downloaded_by: 'Downloaded from: ',
    frontend_messages_download_canceled: 'File was withdrawn',
    frontend_messages_download: 'download',
    frontend_messages_download_again: 'download again',
    frontend_messages_cancel: 'cancel',
    frontend_messages_open: 'open',
    
    frontend_room_invite: '%s1 invited you in the room %s2',
    frontend_online: '%s is now online',
    frontend_offline: '%s is now offline',
    frontend_leave: '%s leaves us',
    frontend_new_message: 'New message from ',
    frontend_new_version: 'New version %s is available',
    frontend_invitation: 'Accept invitation in room %s1 from %s2?',
    frontend_invitation_accept: 'accept',
    frontend_invitation_decline: 'decline',
    frontend_notifications_reminder: '%s unread messages',
    frontend_invalid_key: 'ung&uuml;ltiger Schl&uuml;ssel',
    
    frontend_login_invalid_login: 'Can\'t load key. Invalid password?',
    frontend_login_confirm_reset_key: 'Really reset the key?'
};
if(typeof module !== 'undefined')
    module.exports = lang;
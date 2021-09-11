import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CryptoJS from "crypto-js";

const Crypto = () => {

  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const [encodeBase64Text, setEncodeBase64Text] = useState('');
  const [decodeBase64Text, setDecodeBase64Text] = useState('');

  const { register, watch } = useForm({
    defaultValues: {
      message: '',
      key: ''
    }
  });

  const watchMessageEn = watch("messageToEncrypt");
  const watchMessageDe = watch("messageToDecrypt");
  const watchMessageDeCode = watch("messageToDecode");
  const watchKey = watch("key");

  useEffect(() => {
    if (watchMessageEn) {
      const encrpted = CryptoJS.AES.encrypt(watchMessageEn, watchKey).toString();
      setEncryptedText(encrpted);

      const buffer = Buffer.from(encrpted, 'utf-8');
      setEncodeBase64Text(buffer.toString('base64'));
    }

    if (watchMessageDe) {
      const bytes = CryptoJS.AES.decrypt(watchMessageDe, watchKey)
      setDecryptedText(bytes.toString(CryptoJS.enc.Utf8));
    }

    if (watchMessageDeCode) {
      const buffer = Buffer.from(watchMessageDeCode, 'base64');
      const text = buffer.toString('ascii');
      const bytes = CryptoJS.AES.decrypt(text, watchKey)
      setDecodeBase64Text(bytes.toString(CryptoJS.enc.Utf8));
    }

  }, [watchMessageEn, watchMessageDe, watchMessageDeCode, watchKey])

  return (
    <>
      <form>
        <div>
          <label>Key: </label>
          <input type="text" {...register("key", {
            required: true
          })} />
        </div>
        <div>
          <label>Message to encrypt: </label>
          <input type="text" {...register("messageToEncrypt", {
            required: true
          })} />
        </div>
        <div>
          <label>Message to decrypt: </label>
          <input type="text" {...register("messageToDecrypt", {
            required: true
          })} />
        </div>
        <div>
          <label>Message to decode + decrypt: </label>
          <input type="text" {...register("messageToDecode", {
            required: true
          })} />
        </div>
      </form>

      <p>
        <span> Encrypt AES: {encryptedText}</span>
      </p>
      <p>
        <span> Decrypt AES: {decryptedText}</span>
      </p>
      <p>
        <span> Encrypt to Base64: {encodeBase64Text}</span>
      </p>
      <p>
        <span> Decrypt to text: {decodeBase64Text}</span>
      </p>
    </>
  );
}

export default Crypto;
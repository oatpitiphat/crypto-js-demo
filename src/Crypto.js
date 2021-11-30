import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CryptoJS from "crypto-js";
import "milligram";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo_github from "./GitHub-Mark-32px.png";

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
    const encrypt = () => {
      try {
        if (watchMessageEn) {
          const encrpted = CryptoJS.AES.encrypt(watchMessageEn, watchKey).toString();
          setEncryptedText(encrpted);

          const buffer = Buffer.from(encrpted, 'utf-8');
          setEncodeBase64Text(buffer.toString('base64'));
        }
        else {
          setEncryptedText("");
          setEncodeBase64Text("");
        }
      }
      catch (ex) {
        console.log(ex);
      }
    }

    const decrypt = () => {
      try {
        if (watchMessageDe) {
          const bytes = CryptoJS.AES.decrypt(watchMessageDe, watchKey)
          setDecryptedText(bytes.toString(CryptoJS.enc.Utf8));
        }
        else {
          setDecryptedText("");
        }
      }
      catch (ex) {
        console.log(ex);
      }
    }

    const decode = () => {
      try {
        if (watchMessageDeCode) {
          const buffer = Buffer.from(watchMessageDeCode, 'base64');
          const text = buffer.toString('ascii');
          const bytes = CryptoJS.AES.decrypt(text, watchKey)
          setDecodeBase64Text(bytes.toString(CryptoJS.enc.Utf8));
        }
        else {
          setDecodeBase64Text("");
        }
      }
      catch (ex) {
        console.log(ex);
      }
    }

    encrypt();
    decrypt();
    decode();
  }, [watchKey, watchMessageDe, watchMessageDeCode, watchMessageEn])

  const notify = () => {
    toast.success('Copied to clipboard!', {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <>
      <h2>CryptoJS - Demo</h2>
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

      <CopyToClipboard text={encryptedText} onCopy={notify}>
        <pre>
          <code title="click to copy">
            <b>Encrypt AES:</b> {encryptedText} <i className="clipboard-icon"></i>
          </code>
        </pre>
      </CopyToClipboard>
      <CopyToClipboard text={decryptedText} onCopy={notify}>
        <pre>
          <code title="click to copy">
            <b>Decrypt AES:</b> {decryptedText}
          </code>
        </pre>
      </CopyToClipboard>
      <CopyToClipboard text={encodeBase64Text} onCopy={notify}>
        <pre>
          <code title="click to copy">
            <b>Encrypt to Base64:</b> {encodeBase64Text}
          </code>
        </pre>
      </CopyToClipboard>
      <CopyToClipboard text={decodeBase64Text} onCopy={notify}>
        <pre>
          <code title="click to copy">
            <b>Decrypt to text:</b> {decodeBase64Text}
          </code>
        </pre>
      </CopyToClipboard>
      <ToastContainer />
      <div style={{ textAlign: "center" }}>
        <a href="https://github.com/oatpitiphat/crypto-js-demo">
          <img src={logo_github} alt="github-repository" />
        </a>
      </div>
    </>
  );
}

export default Crypto;
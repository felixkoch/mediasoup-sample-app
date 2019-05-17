module.exports = {
  listenIp: '0.0.0.0',
  listenPort: 3000,
  sslCrt: 'ssl/ssl.pem',
  sslKey: 'ssl/ssl.key',
  mediasoup: {
    // Worker settings
    worker: {
      rtcMinPort: 10000,
      rtcMaxPort: 10100
    },
    // Router settings
    router: {
      mediaCodecs:
        [
          {
            kind: 'audio',
            mimeType: 'audio/opus',
            clockRate: 48000,
            channels: 2
          },
          {
            kind: 'video',
            mimeType: 'video/VP8',
            clockRate: 90000,
            parameters:
              {
                'x-google-start-bitrate': 1000
              }
          },
        ]
    },
    // WebRtcTransport settings
    webRtcTransport: {
      listenIps: [
        {ip: '127.0.0.1', announcedIp: '192.168.178.50'}
      ],
      maxIncomingBitrate: 1500000,
      initialAvailableOutgoingBitrate: 1000000,
    }
  }
};

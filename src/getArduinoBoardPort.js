// Vendor
const { exec } = require('child_process');

module.exports = () => {
    const promise = new Promise((resolve, reject) => {
        // Find arduino port
        console.log('⏳ Looking for arduino board...');

        exec('arduino-cli board list', (error, stdout, stderr) => {
            if (error) {
                reject(Error('❌ Something went wrong while getting board list\n'));
                return;
            }

            const boardList = stdout;

            const lines = boardList.split('\n');

            const ports = lines.filter((item) => {
                return item.includes('Serial Port');
            });

            const usbPorts = ports.filter((item) => {
                return item.includes('Serial Port (USB)');
            });

            if (usbPorts.length === 0) {
                reject(Error('❌ No arduino board was found in the board list\n'));
                return;
            }

            const port = usbPorts[0].split(' ')[0];

            console.log(`✅ Board founded on port ${port}!\n`);

            resolve(port);
        });
    });

    return promise;
};

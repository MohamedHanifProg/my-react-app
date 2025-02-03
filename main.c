
#include "System/system.h"
#include "System/delay.h"
#include "oledDriver/oledC.h"
#include "oledDriver/oledC_colors.h"
#include <p24FJ256GA705.h>
#include "xc.h"

static uint16_t background_color;  // Stores current background color

void oledC_clearScreen(void) 
{    
    uint8_t x;
    uint8_t y;
    oledC_setColumnAddressBounds(0, 96);
    oledC_setRowAddressBounds(0, 96);
    for (x = 0; x < 96; x++)
    {
        for (y = 0; y < 96; y++)
        {
            oledC_sendColorInt(background_color);
        }
    }
}

void oledC_setBackground(uint16_t color)
{
    background_color = color;
    oledC_clearScreen();
}

uint16_t oledC_getBackground(void)
{
    return background_color;
}

void oledC_BitBangCommand(unsigned char cmd)
{
    // Ensure SCK starts in idle state (low)
    LATBbits.LATB15 = 0;

    // Set D/C pin LOW for command
    LATCbits.LATC3 = 0;

    // Set CS low to start transmission
    LATCbits.LATC9 = 0;

    DELAY_microseconds(1); // Small delay before transmission starts

    for (int i = 0; i < 8; i++)
    {
        // Set MOSI to the MSB of the command
        LATBbits.LATB14 = (cmd >> (7 - i)) & 0x01;

        // Toggle clock to shift data out
        LATBbits.LATB15 = 1; // Rising edge
        DELAY_microseconds(1);
        LATBbits.LATB15 = 0; // Falling edge
        DELAY_microseconds(1);
    }

    // Set CS high to finish transmission
    LATCbits.LATC9 = 1;  
}

int main(void)
{
    // Initialize the system
    SYSTEM_Initialize();

    // Initialize the OLED with a Red Background
    oledC_setBackground(OLEDC_COLOR_RED);

    // Remove Hardware SPI (see L9 slide #16)
    __builtin_write_OSCCONL(OSCCON & 0xbf); // Unlock PPS
    RPOR7bits.RP14R = 0;    // RB14 -> SPI MOSI
    RPOR7bits.RP15R = 0;    // RB15 -> SPI Clock
    __builtin_write_OSCCONL(OSCCON | 0x40); // Lock PPS

    // Set Direction (GPO) of software-SPI signals
    TRISCbits.TRISC3 = 0;  // D/C pin is output
    TRISCbits.TRISC9 = 0;  // CS pin is output
    TRISBbits.TRISB15 = 0; // SCK pin is output
    TRISBbits.TRISB14 = 0; // MOSI pin output

    // Set the nCS pin high
    LATCbits.LATC9 = 0;
    LATCbits.LATC3 = 1;

    // Main loop
    while (1)
    {
        oledC_BitBangCommand(OLEDC_CMD_SET_DISPLAY_MODE_INVERSE);
        DELAY_milliseconds(1000);
        oledC_BitBangCommand(OLEDC_CMD_SET_DISPLAY_MODE_ON);
        DELAY_milliseconds(1000);
    }
}

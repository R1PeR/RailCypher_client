package pl.edu.pwsztar;

import java.util.*;




class szyfr_plotkowy {
    int wysokoscPlotka;
    //tu powinno byc enkodowanie

    String dekodowanie(String zaszyfrowaneHaslo, int wysokoscPlotka) throws Exception {
        int a = wysokoscPlotka;
        int dlugosc = zaszyfrowaneHaslo.lenght();
        int b = dlugosc / wysokoscPlotka;
        char tab[][] = new char[a][dlugosc];
        int c;

        String rozszyfrowaneHaslo = "";

        for (int i = 0; i < a; i++) {
            for (int j = 0; j < b; j++) {
                tab[i][j] = zaszyfrowaneHaslo.charAt(c++);
            }
        }
        for (int i = 0; i < b; i++) {
            for (int j = 0; j < a; j++) {
                rozszyfrowaneHaslo += tab[j][i];
            }
        }
        return rozszyfrowaneHaslo;


    }
}
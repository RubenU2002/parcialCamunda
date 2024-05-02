package com.parcial2;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;

import java.util.Random;

public class Disponibilidad implements JavaDelegate {
    @Override
    public void execute(DelegateExecution delegateExecution) throws Exception {
        Random random = new Random(System.currentTimeMillis());

        int numberRandom = random.nextInt(10);
        boolean estaDisponible = disponibilidad(numberRandom);

        delegateExecution.setVariable("disponibilidad", estaDisponible);
    }

    public static boolean disponibilidad(int random){
        if (random%2 == 0) return true;

        return false;
    }
}

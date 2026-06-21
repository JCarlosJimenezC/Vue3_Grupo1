import { ref } from 'vue'

const STORAGE_KEY = 'climavue_history'
const MAX_ENTRIES = 5

export function useSearchHistory() {
  // Inicializa el historial desde localStorage al cargar el composable
  const history = ref(loadHistory())

  // Lee y parsea el historial guardado en localStorage
  function loadHistory() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    } catch {
      return []
    }
  }

  // Agrega una entrada al historial: evita duplicados, mantiene máximo 5, persiste en localStorage
  function addToHistory(entry) {
    const filtered = history.value.filter(h => h.label !== entry.label)
    history.value = [entry, ...filtered].slice(0, MAX_ENTRIES)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.value))
  }

  return { history, addToHistory }
}

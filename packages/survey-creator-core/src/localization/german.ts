// This dictionary contains 239 untranslated or inherited localization strings.
// These strings are commented out. Uncomment and edit them if you want to add your translations.
import { editorLocalization } from "survey-creator-core";

var germanTranslation = {
  // survey templates
  survey: {
    edit: "Bearbeiten",
    externalHelpLink: "Schauen Sie sich an, wie Sie Umfragen erstellen können",
    externalHelpLinkUrl: "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Frage bitte hier platzieren.",
    addLogicItem: "Eine Regel erstellen, um den Fluss der Umfrage anzupassen.",
    copy: "Kopieren",
    duplicate: "Duplizieren",
    addToToolbox: "Zur Werkzeugleiste hinzufügen",
    deletePanel: "Panel löschen",
    deleteQuestion: "Frage löschen",
    convertTo: "Konvertieren zu",
    drag: "Element ziehen"
  },
  // Question types
  qt: {
    default: "Standard",
    checkbox: "Auswahl",
    comment: "Kommentar",
    imagepicker: "Bildauswahl",
    ranking: "Reihenfolge",
    image: "Bild",
    dropdown: "Dropdown",
    // tagbox: "Tag Box",
    file: "Datei",
    html: "HTML",
    matrix: "Matrix (einfache Auswahl)",
    matrixdropdown: "Matrix (mehrfache Auswahl)",
    matrixdynamic: "Matrix (dynamische Zeilen)",
    multipletext: "Text (mehrzeilig)",
    panel: "Panel",
    paneldynamic: "Panel (dynamisch)",
    radiogroup: "Option",
    rating: "Bewertung",
    text: "Text",
    boolean: "Wahrheitswert",
    expression: "Ausdruck (schreibgeschützt)",
    signaturepad: "Unterschrift",
    // buttongroup: "Button Group"
  },
  // Strings in SurveyJS Creator
  ed: {
    defaultLocale: "Standard ({0})",
    survey: "Umfrage",
    settings: "Umfrageeinstellungen",
    settingsTooltip: "Umfrageeinstellungen öffnen",
    // surveySettings: "Survey Settings",
    // surveySettingsTooltip: "Open survey settings",
    showPanel: "Panel anzeigen",
    hidePanel: "Panel verstecken",
    prevSelected: "Vorheriges auswählen",
    nextSelected: "Nächstes auswählen",
    surveyTypeName: "Umfrage",
    pageTypeName: "Seite",
    panelTypeName: "Panel",
    questionTypeName: "Frage",
    columnTypeName: "Spalte",
    addNewPage: "Neue Seite hinzufügen",
    moveRight: "Nach rechts scrollen",
    moveLeft: "Nach links scrollen",
    deletePage: "Seite löschen",
    editPage: "Seite bearbeiten",
    edit: "Bearbeiten",
    newPageName: "Seite",
    newQuestionName: "Frage",
    newPanelName: "Panel",
    newTextItemName: "Text",
    testSurvey: "Test",
    // defaultV2Theme: "Default",
    // modernTheme: "Modern",
    // defaultTheme: "Default (legacy)",
    testSurveyAgain: "Testumfrage wiederholen",
    testSurveyWidth: "Umfragebreite: ",
    navigateToMsg: "Sie werden weitergeleitet: ",
    logic: "Logik",
    embedSurvey: "Umfrage einfügen",
    translation: "Übersetzung",
    saveSurvey: "Umfrage speichern",
    saveSurveyTooltip: "Umfrage speichern",
    designer: "Designer",
    jsonEditor: "JSON",
    jsonHideErrors: "Fehler verstecken",
    jsonShowErrors: "Fehler anzeigen",
    undo: "Rückgängig",
    redo: "Wiederherstellen",
    undoTooltip: "Letzte Änderung rückgängig machen",
    redoTooltip: "Letzte Änderung wiederherstellen",
    // showMoreChoices: "Show more",
    // showLessChoices: "Show less",
    copy: "Kopieren",
    cut: "Ausschneiden",
    paste: "Einfügen",
    copyTooltip: "Auswahl in die Zwischenablage kopieren",
    cutTooltip: "Auswahl ausschneiden",
    pasteTooltip: "Aus der Zwischenablage einfügen",
    options: "Optionen",
    generateValidJSON: "Generiere gültiges JSON",
    generateReadableJSON: "Generiere lesbares JSON",
    toolbox: "Werkzeugleiste",
    "property-grid": "Eigenschaften",
    propertyGridFilteredTextPlaceholder: "Tippen, um zu suchen ...",
    toolboxGeneralCategory: "Allgemein",
    // toolboxChoiceCategory: "Choice Questions",
    // toolboxTextCategory: "Text Input Questions",
    // toolboxContainersCategory: "Containers",
    // toolboxMatrixCategory: "Matrix Questions",
    // toolboxMiscCategory: "Misc",
    correctJSON: "Bitte JSON korrigieren.",
    surveyResults: "Umfrageergebnis: ",
    surveyResultsTable: "Als Tabelle",
    surveyResultsJson: "Als JSON",
    resultsTitle: "Titel der Frage",
    resultsName: "Name der Frage",
    resultsValue: "Wert der Antwort",
    resultsDisplayValue: "Anzeigewert",
    modified: "Modifiziert",
    saving: "Speichern",
    saved: "Gespeichert",
    propertyEditorError: "Fehler:",
    saveError: "Fehler! Der Inhalt des Editors wurde nicht gespeichert.",
    translationPropertyGridTitle: "Übersetzungseinstellungen",
    translationLanguages: "Sprachen",
    translationAddLanguage: "Wählen Sie eine Sprache aus",
    translationShowAllStrings: "Alle Texte anzeigen",
    translationShowUsedStringsOnly: "Verwendete Texte",
    translationShowAllPages: "Alle Seiten anzeigen",
    translationNoStrings: "Keine Texte zum Übersetzen. Bitte den Filter anpassen.",
    translationExportToSCVButton: "Export (CSV)",
    translationImportFromSCVButton: "Import (CSV)",
    translationMergeLocaleWithDefault: "Verschmelze {0} mit der Standardsprache",
    translationPlaceHolder: "Übersetzung ...",
    bold: "Fett",
    italic: "Kursiv",
    underline: "Unterstrichen",
    addNewQuestion: "Frage hinzufügen",
    selectPage: "Seite auswählen ...",
    htmlPlaceHolder: "HTML wird hier dargestellt werden.",
    panelPlaceHolder: "Ziehe eine Frage aus der Toolbox hier her.",
    surveyPlaceHolder: "Die Umfrage enthält keine Frage. Ziehe ein Element aus der Toolbox hier her oder drücke den Button unten.",
    addNewTypeQuestion: "Add {0}", //{0} is localizable question type
    chooseLogoPlaceholder: "[LOGO]",
    // auto: "auto",
    lg: {
      addNewItem: "Neue Regel hinzufügen",
      empty_tab: "Erstelle eine Regel erstellen, um den Fluss der Umfrage anzupassen.",
      page_visibilityName: "Seite anzeigen/verstecken",
      page_enableName: "Seite aktivieren/deaktivieren",
      panel_visibilityName: "Panel anzeigen/verstecken",
      panel_enableName: "Panel aktivieren/deaktivieren",
      question_visibilityName: "Frage anzeigen/verstecken",
      question_enableName: "Frage aktivieren/deaktivieren",
      question_requireName: "Frage optional/erforderlich",
      column_visibilityName: "Spalte anzeigen/verstecken",
      column_enableName: "Spalte aktivieren/deaktivieren",
      column_requireName: "Spalte optional/erforderlich",
      trigger_completeName: "Umfrage abschließen",
      trigger_setvalueName: "Fragenwert setzen",
      trigger_copyvalueName: "Fragenwert kopieren",
      trigger_skipName: "Frage überspringen",
      trigger_runExpressionName: "Ausdruck ausführen",
      completedHtmlOnConditionName: "Seite nach Abschluss der Umfrage anzeigen",
      page_visibilityDescription: "Mache die Seite sichtbar, wenn der logische Ausdruck wahr ergibt. Andernfalls lass sie unsichtbar.",
      panel_visibilityDescription: "Mache das Panel sichtbar, wenn der logische Ausdruck wahr ergibt. Andernfalls lass es unsichtbar.",
      panel_enableDescription: "Aktiviere das Panel zusammen mit all seinen Elementen, wenn der logische Ausdruck wahr ergibt. Andernfalls lass sie deaktiviert.",
      question_visibilityDescription: "Mache die Frage sichtbar, wenn der logische Ausdruck wahr ergibt. Andernfalls lass sie unsichtbar.",
      question_enableDescription: "Aktiviere die Frage, wenn der logische Ausdruck wahr ergibt. Andernfalls lass sie deaktiviert.",
      question_requireDescription: "Frage wird erforderlich, wenn der logische Ausdruck wahr ergibt.",
      trigger_completeDescription: "Wenn der logische Ausdruck wahr ergibt, wir die Umfrage abgeschlossen und der Benutzer sieht die Abschlussseite der Umfrage.",
      trigger_setvalueDescription: "Wenn Werte, die im logischen Ausdruck verwendet werden, geändert werden und der logische Ausdruck wahr ergibt, dann wird der Wert in die ausgewählte Frage eingesetzt.",
      trigger_copyvalueDescription: "Wenn Werte, die im logischen Ausdruck verwendet werden, geändert werden und der logische Ausdruck wahr ergibt, dann wird der Wert einer ausgewählte Fragen kopiert und in eine andere ausgewählte Frage eingesetzt.",
      trigger_skipDescription: "Wenn der logische Ausdruck wahr ergibt, springt die Umfrage zur ausgewählten Frage.",
      trigger_runExpressionDescription: "Wenn der logische Ausdruck wahr ergibt, wird die benutzerdefinierte Anweisung ausgeführt. Sie können optional das Ergebnis der Anweisung in die ausgewählte Frage einsetzen.",
      completedHtmlOnConditionDescription: "Wenn der logische Ausdruck wahr ergibt, dann wird der Standardtext der Abschlussseite der Umfrage mit dem gegebenen Text ersetzt.",
      itemExpressionText: "Wenn der Ausdruck '{0}' wahr ergibt:", //{0} - the expression
      itemEmptyExpressionText: "Neue Regel",
      page_visibilityText: "Mache die Seite {0} sichtbar", //{0} page name
      panel_visibilityText: "Mache das Panel {0} sichtbar", //{0} panel name
      panel_enableText: "Aktiviere das Panel {0}", //{0} panel name
      question_visibilityText: "Mache die Frage {0} sichtbar", //{0} question name
      question_enableText: "Aktiviere die Frage {0}", //{0} question name
      question_requireText: "Mache die Frage {0} erforderlich", //{0} question name
      column_visibilityText: "Mache die Spalte {0} von Frage {1} sichtbar", //{0} column name, {1} question name
      column_enableText: "Aktiviere die Spalte {0} von Frage {1}", //{0} column name, {1} question name
      column_requireText: "Mache die Spalte {0} von Frage {1} erforderlich", //{0} column name, {1} question name
      trigger_completeText: "Umfrage abschließen",
      trigger_setvalueText: "Setze in Frage {0} den Wert {1} ein", //{0} question name, {1} setValue
      trigger_copyvalueText: "Kopiere in Frage {0} den Wert von Frage {1}", //{0} and {1} question names
      trigger_skipText: "Gehe zu Frage {0}", //{0} question name
      trigger_runExpressionText1: "Führe folgenden Ausdruck aus: '{0}'", //{0} the expression
      trigger_runExpressionText2: " und setze das Ergebnis in Frage {0} ein", //{0} question name
      completedHtmlOnConditionText: "Zeigen Sie einen benutzerdefinierten Text auf der Abschlussseite der Umfrage an.",
      showAllQuestions: "Alle Fragen anzeigen",
      showAllActionTypes: "Alle Aktionen anzeigen",
      conditions: "Bedingungen",
      actions: "Aktionen",
      expressionEditorTitle: "Definiere Bedingungen",
      actionsEditorTitle: "Definiere Aktionen",
      deleteAction: "Aktion löschen",
      addNewAction: "Aktion hinzufügen",
      selectedActionCaption: "Aktion zum Hinzufügen auswählen...",
      expressionInvalid: "Der logische Ausdruck ist leer oder ungültig. Bitte korrigieren Sie ihn.",
      noActionError: "Bitte fügen Sie mindestens eine Aktion hinzu.",
      actionInvalid: "Bitte beheben Sie die bestehenden Probleme in Ihren Aktionen.",
      // expressionSetup: "",
      // actionsSetup: ""
    }
  },
  // Property Editors
  pe: {
    apply: "Anwenden",
    ok: "OK",
    save: "Speichern",
    clear: "Leeren",
    saveTooltip: "Speichern",
    cancel: "Abbrechen",
    set: "Setze",
    reset: "Zurücksetzen",
    change: "Verändern",
    refresh: "Neu laden",
    close: "Schliessen",
    delete: "Löschen",
    add: "Hinzufügen",
    addNew: "Neues Element hinzufügen",
    addItem: "Klicken, um ein Element hinzuzufügen ...",
    removeItem: "Klicken, um ein Element zu entfernen ...",
    dragItem: "Ziehe das Element",
    addOther: "Weiteres Element",
    addSelectAll: "Alle Elemente auswählen hinzufügen",
    addNone: "Alle Elemente abwählen hinzufügen",
    removeAll: "Alle löschen",
    edit: "Bearbeiten",
    back: "Zurück ohne zu speichern",
    backTooltip: "Zurück ohne zu speichern",
    saveAndBack: "Speichern und zurück",
    saveAndBackTooltip: "Speichern und zurück",
    doneEditing: "Fertig",
    editChoices: "Auswahlmöglichkeiten bearbeiten",
    showChoices: "Auswahlmöglichkeiten anzeigen",
    move: "Verschieben",
    empty: "<leer>",
    emptyValue: "Wert is leer",
    fastEntry: "Schnelleintrag",
    fastEntryNonUniqueError: "Wert '{0}' ist nicht eindeutig",
    fastEntryChoicesCountError: "Bitte begrenze die Anzahl der Elemente von {0} bis {1}",
    // fastEntryPlaceholder: "You can set data in the following format:\nvalue1|text\nvalue2",
    formEntry: "Formulareintrag",
    testService: "Service testen",
    itemSelectorEmpty: "Bitte ein Element auswählen",
    conditionActionEmpty: "Bitte eine Aktion auswählen",
    conditionSelectQuestion: "Frage auswählen ...",
    conditionSelectPage: "Seite auswählen ...",
    conditionSelectPanel: "Panel auswählen ...",
    conditionValueQuestionTitle: "Bitte den Wert eingeben oder auswählen",
    expressionHelp: "Bitte geben Sie einen Ausdruck ein. Sie können geschweifte Klammern verwenden, um Zugriff auf die Werte der Fragen zu bekommen: \"{question1} + {question2}\", \"({price} * {quantity}) * (100 - {discount})\"",
    aceEditorHelp: "Bitte drücken Sie Strg+Leertaste, um Vervollständigungsvorschläge für den Ausdruck zu erhalten",
    aceEditorRowTitle: "Aktuelle Zeile",
    aceEditorPanelTitle: "Aktuelles Panel",
    showMore: "Weitere Informationen finden Sie in der Dokumentation",
    assistantTitle: "Verfügbare Fragen:",
    cellsEmptyRowsColumns: "Es sollte mindestens eine Spalte oder Zeile geben",
    // showPreviewBeforeComplete: "Preview answers before submitting the survey",
    propertyIsEmpty: "Bitte geben Sie einen Wert ein",
    propertyIsNoUnique: "Bitte geben Sie einen eindeutigen Wert ein",
    propertyNameIsNotUnique: "Bitte geben Sie einen eindeutigen Wert ein",
    listIsEmpty: "Neues Element hinzufügen",
    "listIsEmpty@choices": "Bisher wurden noch keine Auswahlmöglichkeiten hinzugefügt",
    "addNew@choices": "Auswahlmöglichkeit hinzufügen",
    expressionIsEmpty: "Keinen Ausdruck definiert",
    value: "Wert",
    text: "Text",
    rowid: "Zeilen-ID",
    imageLink: "Link auf das Bild",
    columnEdit: "Spalte bearbeiten: {0}",
    itemEdit: "Element bearbeiten: {0}",
    url: "URL",
    path: "Pfad",
    valueName: "Name der Antwort",
    choicesbyurl: {
      // valueName: "Get values from the following JSON field"
    },
    titleName: "Name des Titels",
    imageLinkName: "Name des Links zum Bild",
    allowEmptyResponse: "Keine Antwort erlauben",
    titlePlaceholder: "Titel eingeben",
    surveyTitlePlaceholder: "Umfragetitel eingeben",
    pageTitlePlaceholder: "Seitenbeschreibung eingeben",
    descriptionPlaceholder: "Beschreibung eingeben",
    surveyDescriptionPlaceholder: "Umfragebeschreibung eingeben",
    pageDescriptionPlaceholder: "Seitenbeschreibung eingeben",
    showOtherItem: "Sonstiges auswählbar?",
    otherText: "Text für Sonstiges",
    showNoneItem: "Alle Elemente abwählbar?",
    noneText: "Text für die Abwahl aller Elemente",
    showSelectAllItem: "Alle Elemente auswählbar?",
    selectAllText: "Text für die Auswahl aller Elemente",
    choicesMin: "Minimaler Wert für automatisch erzeugte Elemente",
    choicesMax: "Maximaler Wert für automatisch erzeugte Elemente",
    choicesStep: "Schrittgröße für automatisch erzeugte Elemente",
    name: "Name",
    title: "Titel",
    cellType: "Zellentyp",
    colCount: "Spaltenanzahl",
    choicesOrder: "Auswahlreihenfolge",
    visible: "Sichtbar?",
    isRequired: "Erforderlich?",
    isAllRowRequired: "Ist eine Antwort für alle Zeilen erforderlich?",
    requiredErrorText: "Fehlermeldung bei nicht beantworteten erforderlichen Fragen",
    startWithNewLine: "Starte mit einer neuen Zeile",
    rows: "Zeilenanzahl",
    cols: "Spaltenanzahl",
    placeholder: "Platzhalter",
    showPreview: "Wird eine Bildvorschau angezeigt?",
    storeDataAsText: "Speicher Dateininhalt des JSON-Resultats als Text",
    maxSize: "Maximale Dateigröße in Bytes",
    imageHeight: "Bildhöhe",
    imageWidth: "Bildbreite",
    rowCount: "Zeilenanzahl",
    columnLayout: "Spaltenlayout",
    addRowLocation: "Zeilenknopfposition hinzufügen",
    addRowText: "Zeilenknopftext hinzufügen",
    removeRowText: "Zeilenknopftext löschen",
    rateMin: "Minimum",
    rateMax: "Maximum",
    rateStep: "Bewertungsschritte",
    minRateDescription: "Beschreibung für minimale Bewertung",
    maxRateDescription: "Beschreibung für maximale Bewertung",
    inputType: "Eingabetyp",
    optionsCaption: "Auswahlbeschriftung",
    defaultValue: "Standardantwort",
    cellsDefaultRow: "Standardzellentext",
    surveyEditorTitle: "Umfrageeinstellungen bearbeiten",
    qEditorTitle: "Frage bearbeiten: {0}",
    maxLength: "Maximale Länge",
    buildExpression: "Einfach",
    editExpression: "Erweitert",
    // and: "and",
    // or: "or",
    remove: "Entfernen",
    addCondition: "Bedingung hinzufügen",
    // emptyLogicPopupMessage: "Select a question to start configuring conditions.",
    if: "Wenn",
    // then: "then",
    setToName: "von",
    fromName: "bis",
    // gotoName: "Question to skip to",
    ruleIsNotSet: "Regel is nicht korrekt",
    // includeIntoResult: "Include into survey results",
    showTitle: "Titel anzeigen",
    expandCollapseTitle: "Titel ausklappen/einklappen",
    locale: "Standardsprache",
    simulator: "Gerät auswählen",
    landscapeOrientation: "Querformat",
    portraitOrientation: "Hochformat",
    mode: "Modus (editierbar/schreibgeschützt)",
    clearInvisibleValues: "Alle unsichtbaren Werte leeren",
    cookieName: "Cookie-Name (um zu unterdrücken, dass die Umfrage lokal zwei Mal ausgefüllt werden kann)",
    sendResultOnPageNext: "Sende Umfrageergebnisse beim Betreten der nächsten Seite",
    storeOthersAsComment: "Speichere andere Werte als Kommentar",
    showPageTitles: "Seitenbeschreibung anzeigen",
    showPageNumbers: "Seitennummern anzeigen",
    pagePrevText: "Text des Buttons für die vorherige Seite",
    pageNextText: "Text des Buttons für die nächste Seite",
    completeText: "Text des Abschließenbuttons",
    previewText: "Text des Vorschaubuttons",
    editText: "Text des Bearbeitenbuttons",
    startSurveyText: "Text des Startbuttons",
    showNavigationButtons: "Anzeige der Navigationsbuttons",
    showPrevButton: "Button für die vorherige Seite anzeigen (Benutzer können auf die vorherige Seite zurückkehren)",
    firstPageIsStarted: "Die erste Seite der Umfrage ist die Startseite",
    showCompletedPage: "Nach Abschluss die ausgefüllte Umfrage anzeigen",
    goNextPageAutomatic: "Wenn alle Fragen auf einer Seite beantwortet sind, gehe automatisch zur nächsten Seiten",
    showProgressBar: "Fortschrittsbalken anzeigen",
    questionTitleLocation: "Position des Fragentitels",
    requiredText: "Symbol für erforderliche Fragen",
    questionStartIndex: "Startindex der Fragen (bspw. \"1\", \"A\", \"a\", ...)",
    showQuestionNumbers: "Fragennummern anzeigen",
    questionTitleTemplate: "Template für den Fragentitel. Standard ist: \"{no}. {require} {title}\"",
    questionErrorLocation: "Position der Fehlermeldungen",
    focusFirstQuestionAutomatic: "Fokussiere die erste Frage automatisch",
    questionsOrder: "Reihenfolge der Elemente auf der Seite",
    maxTimeToFinish: "Maximale Zeit, um die Umfrage zu beenden",
    maxTimeToFinishPage: "Maximale Zeit, um eine Seite der Umfrage zu beenden",
    page: {
      // maxTimeToFinish: "Time limit to finish the page (in seconds)"
    },
    question: {
      // page: "Parent page"
    },
    showTimerPanel: "Position des Timers",
    showTimerPanelMode: "Modus des Timers",
    renderMode: "Anzeigemodus",
    allowAddPanel: "Erlaube das Hinzufügen eines Paneltexts",
    allowRemovePanel: "Erlaube das Entfernen eines Paneltexts",
    // noEntriesText: "Empty entries text",
    panelAddText: "Paneltext hinzufügen",
    panelRemoveText: "Paneltext entfernen",
    isSinglePage: "Alle Elemente auf einer Seite anzeigen",
    html: "HTML",
    expression: "Ausdruck",
    // setValue: "Answer",
    // dataFormat: "Image format",
    // allowAddRows: "Allow adding rows",
    // allowRemoveRows: "Allow removing rows",
    // allowRowsDragAndDrop: "Allow row drag and drop",
    // responsiveImageSizeHelp: "Does not apply if you specify the exact image width or height.",
    // minImageWidth: "Minimum image width",
    // maxImageWidth: "Maximum image width",
    // minImageHeight: "Minimum image height",
    // maxImageHeight: "Maximum image height",
    minValue: "Minimaler Wert",
    maxValue: "Maximaler Wert",
    minLength: "Minimale Länge",
    allowDigits: "Ziffern erlaubt",
    minCount: "Minimale Anzahl",
    maxCount: "Maximale Anzahl",
    regex: "Regulärer Ausdruck",
    surveyvalidator: {
      // text: "Error message",
      // expression: "Validation expression"
    },
    totalText: "Text (total)",
    totalType: "Typ (total)",
    totalExpression: "Ausdruck (total)",
    totalDisplayStyle: "Anzeigestil (total)",
    totalCurrency: "Währung (total)",
    totalFormat: "Format (total)",
    // logo: "Logo (URL or base64-encoded string)",
    // questionsOnPageMode: "Survey structure",
    // maxTextLength: "Maximum answer length (in characters)",
    // maxOthersLength: "Maximum comment length (in characters)",
    // autoGrowComment: "Auto-expand comment area if necessary",
    // textUpdateMode: "Update text question value",
    // focusOnFirstError: "Set focus on the first invalid answer",
    // checkErrorsMode: "Run validation",
    // navigateToUrl: "Navigate to URL",
    // navigateToUrlOnCondition: "Dynamic URL",
    // completedBeforeHtml: "Markup to show if the user already filled out this survey",
    // completedHtml: "Survey Complete page markup",
    // completedHtmlOnCondition: "Dynamic Survey Complete page markup",
    // loadingHtml: "Markup to show while survey model is loading",
    // commentText: "Comment area text",
    // autocomplete: "Autocomplete type",
    // labelTrue: "\"True\" label",
    // labelFalse: "\"False\" label",
    allowClear: "Überschrift der Auswahlmöglichkeiten anzeigen",
    // displayStyle: "Value display style",
    // format: "Formatted string",
    // maximumFractionDigits: "Maximum fractional digits",
    // minimumFractionDigits: "Minimum fractional digits",
    // useGrouping: "Display grouping separators",
    // allowMultiple: "Allow multiple files",
    // allowImagesPreview: "Preview images",
    // acceptedTypes: "Accepted file types",
    // waitForUpload: "Wait for the upload to complete",
    // needConfirmRemoveFile: "Confirm file deletion",
    // detailPanelMode: "Detail panel location",
    // minRowCount: "Minimum row count",
    // maxRowCount: "Maximum row count",
    // confirmDelete: "Confirm row deletion",
    // confirmDeleteText: "Confirmation message",
    paneldynamic: {
      // confirmDelete: "Confirm panel deletion"
    },
    // panelCount: "Initial panel count",
    // minPanelCount: "Minimum panel count",
    // maxPanelCount: "Maximum panel count",
    // panelsState: "Inner panel expand state",
    // templateDescription: "Description template",
    // templateTitle: "Title template",
    // panelPrevText: "Previous Panel button tooltip",
    // panelNextText: "Next Panel button tooltip",
    // showRangeInProgress: "Show progress bar",
    // templateTitleLocation: "Question title location",
    // panelRemoveButtonLocation: "Remove Panel button location",
    // hideIfRowsEmpty: "Hide the question if there are no rows",
    // hideColumnsIfEmpty: "Hide columns if there are no rows",
    // rateValues: "Custom rate values",
    // hideIfChoicesEmpty: "Hide the question if it contains no choices",
    // hideNumber: "Hide question number",
    // minWidth: "Minimum width (in CSS-accepted values)",
    // maxWidth: "Maximum width (in CSS-accepted values)",
    // width: "Width (in CSS-accepted values)",
    // showHeader: "Show column headers",
    // horizontalScroll: "Show horizontal scrollbar",
    // columnMinWidth: "Minimum column width (in CSS-accepted values)",
    // rowTitleWidth: "Row header width (in CSS-accepted values)",
    // valueTrue: "\"True\" value",
    // valueFalse: "\"False\" value",
    // minErrorText: "\"Value is below minimum\" error message",
    // maxErrorText: "\"Value exceeds maximum\" error message",
    // otherErrorText: "\"Empty comment\" error message",
    // keyDuplicationError: "\"Non-unique key value\" error message",
    // maxSelectedChoices: "Maximum selected choices",
    // showClearButton: "Show the Clear button",
    // showNumber: "Show panel number",
    // logoWidth: "Logo width (in CSS-accepted values)",
    // logoHeight: "Logo height (in CSS-accepted values)",
    // readOnly: "Read-only",
    // enableIf: "Editable if",
    // emptyRowsText: "\"No rows\" message",
    // size: "Input size (in characters)",
    separateSpecialChoices: "Spezielle Auswahlmöglichkeiten separieren",
    // choicesFromQuestion: "Copy choices from the following question",
    // choicesFromQuestionMode: "Which choices to copy?",
    // showCommentArea: "Show the comment area",
    // commentPlaceholder: "Comment area placeholder",
    displayRateDescriptionsAsExtremeItems: "Beschreibung für minimale und maximale Bewertung als Werte anzeigen",
    // rowsOrder: "Row order",
    // columnsLayout: "Column layout",
    // columnColCount: "Nested column count",
    // state: "Panel expand state",
    // correctAnswer: "Correct Answer",
    // defaultPanelValue: "Default Values",
    // cells: "Cell Texts",
    // keyName: "Key column",
    itemvalue: {
      // text: "Alt text"
    },
    logoPosition: "Logoposition",
    addLogo: "Logo hinzufügen ...",
    changeLogo: "Logo bearbeiten ...",
    logoPositions: {
      none: "ausblenden",
      left: "links",
      right: "rechts",
      top: "oben",
      bottom: "unten"
    },
    tabs: {
      general: "Allgemein",
      fileOptions: "Optionen",
      html: "Html Editor",
      columns: "Spalten",
      rows: "Zeilen",
      choices: "Auswahlmöglichkeiten",
      items: "Elemente",
      visibleIf: "Sichtbar wenn ...",
      enableIf: "Aktiviert wenn ...",
      requiredIf: "Erforderlich wenn ...",
      rateValues: "Bewertungsskala",
      choicesByUrl: "Auswahlmöglichkeiten aus dem Internet",
      matrixChoices: "Standardauswahl",
      multipleTextItems: "Texteingabe",
      numbering: "Nummerierung",
      validators: "Überprüfung",
      navigation: "Navigation",
      question: "Fragen",
      pages: "Seiten",
      timer: "Timer",
      calculatedValues: "Berechnete Werte",
      triggers: "Trigger",
      templateTitle: "Titeltemplate",
      totals: "Summen",
      logic: "Logik",
      layout: "Layout",
      data: "Daten",
      validation: "Validierung",
      cells: "Zellen",
      showOnCompleted: "Abschluss",
      logo: "Logo im Umfragetitel",
      slider: "Slider",
      // expression: "Expression",
      others: "Weiteres"
    },
    editProperty: "Eigenschaft bearbeiten '{0}'",
    items: "Gegenstände",
    // choicesVisibleIf: "Choices are visible if",
    // choicesEnableIf: "Choices are selectable if",
    // columnsEnableIf: "Columns are visible if",
    // rowsEnableIf: "Rows are visible if",
    // indent: "Add indents",
    panel: {
      // indent: "Add outer indents"
    },
    // innerIndent: "Add inner indents",
    // defaultValueFromLastRow: "Take default values from the last row",
    // defaultValueFromLastPanel: "Take default values from the last panel",
    enterNewValue: "Bitte einen Wert eingeben.",
    noquestions: "Die Umfrage enthält keine Frage.",
    createtrigger: "Bitte einen Trigger eingeben.",
    titleKeyboardAdornerTip: "Bitte drücken Sie ENTER, um bearbeiten zu können",
    keyboardAdornerTip: "Drücken Sie ENTER, um das Element zu bearbeiten, ENTFERNEN, um das Element zu entfernen, STRG + PFEIL NACH OBEN/UNTEN, um das Element zu verschieben",
    triggerOn: "Ein",
    triggerMakePagesVisible: "Seiten sichtbar machen:",
    triggerMakeQuestionsVisible: "Elemente sichtbar machen:",
    triggerCompleteText: "Bei Erfolg die Umfrage abschliessen.",
    triggerNotSet: "Trigger ist nicht gesetzt",
    triggerRunIf: "Ausführen wenn ...",
    triggerSetToName: "Ändere den Wert von: ",
    triggerFromName: "Kopiere den Wert von: ",
    triggerRunExpression: "Führe diesen Ausdruck aus:",
    triggerSetValue: "nach: ",
    triggerGotoName: "Gehe zu Frage:",
    triggerIsVariable: "Die Variable nicht in das Umfrageergebnis platzieren.",
    triggerRunExpressionEmpty: "Bitte geben Sie einen gültigen Ausdruck ein",
    emptyExpressionPlaceHolder: "Tippen Sie hier Ihren Ausdruck ein ...",
    noFile: "Keine Datei ausgewählt",
    // clearIfInvisible: "Clear the value if the question becomes hidden",
    // valuePropertyName: "Value property name",
    // searchEnabled: "Enable search",
    // hideSelectedItems: "Hide selected items",
    // signatureWidth: "Signature width",
    // signatureHeight: "Signature height",
    // verticalAlign: "Vertical alignment",
    // alternateRows: "Alternate rows",
    // columnsVisibleIf: "Columns are visible if",
    // rowsVisibleIf: "Rows are visible if",
    // otherPlaceholder: "Comment area placeholder"
  },
  // Property values
  pv: {
    // true: "true",
    // false: "false",
    inherit: "vererbt",
    show: "anzeigen",
    hide: "verstecken",
    default: "Standard",
    initial: "initial",
    random: "zufällig",
    collapsed: "eingeklappt",
    expanded: "ausgeklappt",
    none: "/",
    asc: "aufsteigend",
    desc: "absteigend",
    indeterminate: "unentschieden",
    // decimal: "decimal",
    // currency: "currency",
    // percent: "percent",
    firstExpanded: "ausgeklappt (erstes Element)",
    off: "aus",
    // onpanel: "Start on each panel",
    onPanel: "Panel",
    onSurvey: "Umfrage",
    list: "Liste",
    progressTop: "oben (Fortschritt)",
    progressBottom: "unten (Fortschritt)",
    progressTopBottom: "oben und unten (Fortschritt)",
    horizontal: "horizontal",
    vertical: "vertikal",
    top: "oben",
    bottom: "unten",
    topBottom: "oben und unten",
    both: "beides",
    left: "links",
    right: "rechts",
    color: "Farbe",
    date: "Datum",
    datetime: "Datum/Uhrzeit",
    // "datetime-local": "datetime-local",
    email: "E-Mail",
    month: "Monat",
    number: "Nummer",
    password: "Passwort",
    range: "Bereich",
    tel: "Telefon",
    text: "Text",
    time: "Uhrzeit",
    url: "URL",
    week: "Woche",
    hidden: "versteckt",
    on: "an",
    onPage: "an (unabhängig für jede Seite)",
    edit: "Bearbeiten",
    display: "Anzeigen",
    onComplete: "Wenn die Umfrage abgeschlossen wurde",
    onHidden: "Wenn die Umfrage versteckt wurde",
    onHiddenContainer: "Wenn die Frage oder ihr Panel/Seite ausgeblendet wird",
    clearInvisibleValues: {
      none: "Niemals"
    },
    all: "alle",
    page: "Seite",
    survey: "Umfrage",
    onNextPage: "Wenn die Seite gewechselt wurde",
    onValueChanged: "Wenn ein Wert geändert wurde",
    onValueChanging: "Bevor eine Antwort geändert wird",
    standard: "Standard",
    singlePage: "Alle Fragen auf eine Seite",
    questionPerPage: "Alle Fragen auf eine eigene Seite",
    noPreview: "Keine Vorschau",
    showAllQuestions: "Vorschau mit allen Fragen anzeigen",
    showAnsweredQuestions: "Vorschau mit beantworteten Fragen anzeigen",
    pages: "Seiten",
    questions: "Fragen",
    requiredQuestions: "Erforderliche Fragen",
    correctQuestions: "Richtig beantwortete Fragen",
    buttons: "Buttons",
    underInput: "Unterhalb des Eingabefelds",
    underTitle: "Unterhalb des Titels",
    // onBlur: "On blur",
    // onTyping: "While typing",
    // underRow: "Under the row",
    // underRowSingle: "Under the row, only one panel is visible",
    showNavigationButtons: {
      none: "Versteckt"
    },
    showProgressBar: {
      off: "Versteckt"
    },
    showTimerPanel: {
      none: "Versteckt"
    },
    showTimerPanelMode: {
      all: "Beide"
    },
    detailPanelMode: {
      none: "Versteckt"
    },
    addRowLocation: {
      default: "Hängt vom Matrix Layout ab"
    },
    panelsState: {
      // default: "Users cannot expand or collapse panels",
      // collapsed: "All panels are collapsed",
      // expanded: "All panels are expanded"
    },
    widthMode: {
      // auto: "Auto",
      // static: "Static",
      // responsive: "Responsive"
    },
    imageFit: {
      // none: "None",
      // contain: "Contain",
      // cover: "Cover",
      // fill: "Fill"
    },
    contentMode: {
      // auto: "Auto",
      // image: "Image",
      // video: "Video",
      // youtube: "YouTube"
    },
    displayMode: {
      // auto: "Auto",
      // buttons: "Buttons",
      // dropdown: "Dropdown"
    }
  },
  // Operators
  op: {
    empty: "ist leer",
    notempty: "ist nicht leer",
    equal: "ist gleich",
    notequal: "ist ungleich",
    contains: "enthält",
    notcontains: "enthält nicht",
    anyof: "eins aus",
    allof: "alle aus",
    greater: "größer als",
    less: "kleiner als",
    greaterorequal: "größer oder gleich als",
    lessorequal: "kleiner oder gleich als",
    // and: "and",
    // or: "or"
  },
  // Embed window
  ew: {
    angular: "Angular-Version benutzen",
    jquery: "jQuery-Version benutzen",
    knockout: "Knockout-Version benutzen",
    react: "React-Version benutzen",
    vue: "Vue-Version benutzen",
    bootstrap: "Als Bootstrap Framework",
    modern: "Theme: Modern",
    default: "Theme: Standard",
    orange: "Theme: Orange",
    darkblue: "Theme: Dunkelblau",
    darkrose: "Theme: Dunklerosa",
    stone: "Theme: Stein",
    winter: "Theme: Winter",
    winterstone: "Theme: Winterstein",
    showOnPage: "Umfrage auf Seite anzeigen",
    showInWindow: "Umfrage als Fenster anzeigen",
    loadFromServer: "Lade Umfrage als JSON vom Server",
    titleScript: "Skripte und Styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  // Preview (Survey)
  ts: {
    selectPage: "Seite:",
    showInvisibleElements: "Unsichtbare Elemente anzeigen",
    // hideInvisibleElements: "Hide invisible elements"
  },
  validators: {
    answercountvalidator: "Antwortanzahl",
    emailvalidator: "E-Mail",
    expressionvalidator: "Ausdruck",
    numericvalidator: "Zahl",
    regexvalidator: "Regulärer Ausdruck",
    textvalidator: "Text"
  },
  triggers: {
    completetrigger: "Umfrage abschließen",
    setvaluetrigger: "Wert setzen",
    copyvaluetrigger: "Wert kopieren",
    skiptrigger: "Frage wechseln",
    runexpressiontrigger: "Anweisung ausführen",
    visibletrigger: "Sichtbarkeit ändern (deprecated)"
  },
  pehelp: {
    // cookieName: "Cookies prevent users from filling out the same survey twice.",
    // format: "Use {0} as a placeholder for the actual value.",
    // totalText: "Visible only when at least one column has Total type or Total expression.",
    // acceptedTypes: "Refer to the [accept](https://www.w3schools.com/tags/att_input_accept.asp) attribute description for more information.",
    // columnColCount: "Applicable only to Radiogroup and Checkbox cell types.",
    // autocomplete: "Refer to the [autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) attribute description for more information.",
    // valueName: "If you do not set this property, the answer will be stored in a field specified by the Name property.",
    choicesbyurl: {
      // valueName: " "
    },
    // keyName: "If the specified column contains identical values, the survey throws the \"Non-unique key value\" error."
  },
  // Properties
  p: {
    title: {
      name: "Titel",
      title: "Bitte leer lassen, falls gleich wie \"Name\""
    },
    multiSelect: "Mehrfachauswahl",
    showLabel: "Label anzeigen",
    // value: "Value",
    visibleIf: "Sichtbar wenn ...",
    // attachOriginalItems: "attachOriginalItems",
    useDisplayValuesInDynamicTexts: "Verwende Anzeigewerte im Titel",
    titleLocation: "Position des Titels",
    description: "Beschreibung",
    descriptionLocation: "Position der Beschreibung",
    defaultValueExpression: "Ausdruck für Standardwerte",
    requiredIf: "Erforderlich wenn ...",
    validators: "Validierungen",
    bindings: "Bindings",
    // renderAs: "renderAs",
    currency: "Währung",
    // cellHint: "cellHint",
    // isUnique: "isUnique",
    // showInMultipleColumns: "showInMultipleColumns",
    // totalMaximumFractionDigits: "totalMaximumFractionDigits",
    // totalMinimumFractionDigits: "totalMinimumFractionDigits",
    columns: "Spalten",
    // detailElements: "detailElements",
    choices: "Auswahlmöglichkeiten",
    // allowAdaptiveActions: "allowAdaptiveActions",
    defaultRowValue: "Standardwert für Zeilen",
    detailPanelShowOnAdding: "Panel für Details beim Hinzufügen anzeigen",
    logoFit: "Passform des Logos",
    pages: "Seiten",
    // questions: "questions",
    triggers: "Trigger",
    calculatedValues: "Berechnete Werte",
    // surveyId: "surveyId",
    // surveyPostId: "surveyPostId",
    // surveyShowDataSaving: "surveyShowDataSaving",
    questionDescriptionLocation: "Position der Fragenbeschreibung",
    progressBarType: "Fortschrittsbalkentyp",
    questionTitlePattern: "Pattern für Fragentitel",
    widthMode: "Modus für die Breite",
    // showBrandInfo: "showBrandInfo",
    choicesByUrl: "Auswahlreihenfolge nach URL",
    // choicesLazyLoadEnabled: "choicesLazyLoadEnabled",
    // choicesLazyLoadPageSize: "choicesLazyLoadPageSize",
    // inputFieldComponent: "inputFieldComponent",
    // itemComponent: "itemComponent",
    min: "Minimaler Wert",
    max: "Maximaler Wert",
    minValueExpression: "Ausdruck für minimalen Wert",
    maxValueExpression: "Ausdruck für maximalen Wert",
    step: "Schritt",
    dataList: "Datenliste",
    itemSize: "Elementgröße",
    elements: "Elemente",
    content: "Inhalt",
    navigationButtonsVisibility: "Sichtbarkeit der Navigationsbuttons",
    navigationTitle: "Navigationstitel",
    navigationDescription: "Navigationsbeschreibung",
    // closeOnSelect: "closeOnSelect",
    // longTap: "longTap",
    autoGrow: "Automatisch vergrößern",
    // acceptCarriageReturn: "acceptCarriageReturn",
    displayMode: "Anzeigemodus",
    label: "Label",
    contentMode: "Inhaltsmodus",
    imageFit: "Passform des Bildes",
    // altText: "altText",
    height: "Höhe",
    penColor: "Stiftfarbe",
    backgroundColor: "Hintergrundfarbe",
    // templateElements: "templateElements",
    // operator: "operator",
    // isVariable: "isVariable",
    // runExpression: "runExpression",
    showCaption: "Titel anzeigen",
    iconName: "Name des Icons",
    iconSize: "Größe des Icons"
  }
};

editorLocalization.locales["de"] = germanTranslation;
